export type Message = {
  sender: string;
  content?: string;
  type: "CHAT" | "JOIN" | "LEAVE";
};

export type ErrorResponse = { status: "error"; message: string };

export type Response<T> = T | ErrorResponse;

export type ChatMessage = Message & { content: string; type: "CHAT" };
export type ChatResponse = Response<ChatMessage>;

export type JoinMessage = Message & { content: string; type: "JOIN" };
export type JoinResponse = Response<JoinMessage>;

export type LeaveMessage = Message & { type: "LEAVE" };
export type LeaveResponse = Response<LeaveMessage>;
