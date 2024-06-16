import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { lobbyApi } from "@/api/lobbyApi";
import { OrderRequest, RoomResponse } from "@/types/interfaces/lobbyInterface";

export const useLobby = (
  params: OrderRequest,
  queryKey: string,
  queryType: "date" | "playerCount",
): UseQueryResult<RoomResponse[]> => {
  const queryFn =
    queryType === "date"
      ? lobbyApi.getRoomByDate
      : lobbyApi.getRoomsByPlayerCount;

  return useQuery({
    queryKey: [queryKey, params],
    queryFn: () =>
      queryFn(params).then((data) => (Array.isArray(data) ? data : [data])),
    staleTime: 10000,
    gcTime: 300000,
  });
};
