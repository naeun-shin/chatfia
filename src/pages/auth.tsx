import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
import { useSignUp } from "@/hooks/useSignUp";
import { useLogin } from "@/hooks/useLogin";

type LoginInput = z.infer<typeof loginSchema>;
type SignUpInput = z.infer<typeof signUpSchema>;

export default function Auth() {
  const router = useRouter();
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
    console.log("로그인: ", data); // 폼 제출 시 출력
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

  useEffect(() => {
    if (loginMutation.isSuccess) {
      toast({
        title: "로그인에 성공했습니다. 즐거운 시간 되세요!",
        variant: "success",
        duration: 3000,
      });
      router.push("/");
    }
  }, [loginMutation.isSuccess, router, toast]);

  useEffect(() => {
    if (signUpMutation.isSuccess) {
      toast({
        title: "회원가입에 성공했습니다.",
        variant: "success",
        duration: 3000,
      });
      setStep(0);
    }
  }, [signUpMutation.isSuccess, toast]);

  return (
    <div>
      <div className="fixed left-0 top-0 h-full w-full overflow-y-auto bg-black bg-opacity-60">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Card
            className={cn(
              "flex h-[750px] w-[500px] flex-col justify-center px-4",
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
                    method="GET"
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
                    <div className={cn("flex justify-center gap-4 pt-8")}>
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
                "absolute left-0 right-0 flex flex-col justify-center space-y-3",
                {
                  "opacity-100 transition-opacity duration-100": step === 1,
                  "opacity-0 transition-opacity duration-100": step !== 1,
                },
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
                    method="GET"
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
                    <div className={cn("flex justify-center gap-2 pt-4")}>
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
