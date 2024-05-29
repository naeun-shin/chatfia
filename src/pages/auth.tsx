import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, signUpSchema } from "@/validators/auth";
import { z } from "zod";
import { useState } from "react";
import HeaderWithoutLoginButton from "@/components/header/HeaderWithoutLoginButton";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useSignUp } from "@/hooks/useSignUp";
import { useLogin } from "@/hooks/useLogin";

type LoginInput = z.infer<typeof loginSchema>;
type SignUpInput = z.infer<typeof signUpSchema>;

export default function Auth() {
  const [step, setStep] = useState<number>(0);

  const { toast } = useToast();

  // React Hook Form 라이브러리를 사용하여 폼 상태를 관리
  // LoginInput, signUpInput 스키마를 사용하여 입력값을 검증
  const loginForm = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signUpForm = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const loginMutation = useLogin();

  function onLoginSubmit(data: LoginInput) {
    loginMutation.mutate(data);
  }

  const signUpMutation = useSignUp();

  function onSignUpSubmit(data: SignUpInput) {
    const { password, confirmPassword } = data;

    if (password !== confirmPassword) {
      toast({
        title: "비밀번호가 일치하지 않습니다.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    signUpMutation.mutate(data);
  }

  return (
    <div>
      <HeaderWithoutLoginButton />
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 overflow-y-auto">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <Card
            className={cn(
              "w-[500px] h-[750px] px-4 flex flex-col justify-center"
            )}
          >
            <motion.div
              className={cn("space-y-3", {
                "opacity-0 transition-opacity duration-100": step === 1,
                "opacity-100 transition-opacity duration-100": step !== 1,
              })}
              animate={{ translateX: `${step * -100}%` }}
              transition={{ ease: "easeInOut" }}
            >
              <CardHeader>
                <CardTitle>LOGIN</CardTitle>
                <div className="flex justify-center gap-8 p-4">
                  <Link href="#">
                    <Image
                      src="/imgs/naver.png"
                      alt="naver"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imgs/kakao.png"
                      alt="kakao"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
                <CardDescription>or use your account</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...loginForm}>
                  <form
                    onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                    className="relative space-y-3 overflow-x-hidden"
                  >
                    <FormField
                      control={loginForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>이메일</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>비밀번호</FormLabel>
                          <FormControl>
                            <Input type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className={cn("flex justify-center pt-8 gap-4")}>
                      <Button
                        type="button"
                        variant="ghost"
                        className={cn({ hidden: step === 1 })}
                      >
                        <Link href="/">홈으로</Link>
                      </Button>
                      <Button
                        type="submit"
                        variant="ghost"
                        className={cn({ hidden: step === 1 })}
                      >
                        로그인
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className={cn({ hidden: step === 1 })}
                        onClick={() => {
                          setStep(1);
                        }}
                      >
                        회원가입
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </motion.div>
            <motion.div
              className={cn(
                "space-y-3 absolute flex flex-col justify-center left-0 right-0",
                {
                  "opacity-100 transition-opacity duration-100": step === 1,
                  "opacity-0 transition-opacity duration-100": step !== 1,
                }
              )}
              animate={{ translateX: `${(1 - step) * 100}%` }}
              style={{ translateX: `${(1 - step) * 100}%` }}
              transition={{
                ease: "easeInOut",
              }}
            >
              <CardHeader>
                <CardTitle>SIGN UP</CardTitle>
                <div className="flex justify-center gap-8 p-4">
                  <Link href="#">
                    <Image
                      src="/imgs/naver.png"
                      alt="naver"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imgs/kakao.png"
                      alt="kakao"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
                <CardDescription>
                  or use your email for registration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...signUpForm}>
                  <form
                    onSubmit={signUpForm.handleSubmit(onSignUpSubmit)}
                    className="relative space-y-3 overflow-x-hidden"
                  >
                    <FormField
                      control={signUpForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>이메일</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="swordmaster@sparta-devcamp.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="nickname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>닉네임</FormLabel>
                          <FormControl>
                            <Input placeholder="고길동" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>비밀번호</FormLabel>
                          <FormControl>
                            <Input type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>비밀번호 확인</FormLabel>
                          <FormControl>
                            <Input type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className={cn("flex justify-center pt-4 gap-2")}>
                      <Button
                        type="button"
                        variant="ghost"
                        className={cn({ hidden: step === 0 })}
                        onClick={() => {
                          setStep(0);
                        }}
                      >
                        로그인하기
                      </Button>
                      <Button
                        type="submit"
                        variant="ghost"
                        className={cn({ hidden: step === 0 })}
                      >
                        계정 등록하기
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </motion.div>
          </Card>
        </div>
      </div>
    </div>
  );
}
