"use client";
import LatestOrderItem from "@/components/order/LatestOrderItem";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import useSWR from "swr";

export default function OrdersPage() {
  const url = "/admin/orders/api";

  // Fetcher para SWR
  const fetcher = () =>
    fetch(url).then((res) => res.json().then((data) => data));
  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });

  if (isLoading) return <p>Cargando...</p>;

  if (error) return <p>Error...</p>;

  if (data)
    return (
      <>
        <h1 className="text-center mt-20 text-6xl font-black">
          Ordenes Listas
        </h1>

        <Logo />

        {data.length ? (
          <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
            {data.map((order) => (
              <LatestOrderItem order={order} key={order.id} />
            ))}
          </div>
        ) : (
          <p className="text-center my-10">No hay ordenes listas</p>
        )}
      </>
    );
}
