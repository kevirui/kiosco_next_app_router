"use client";

import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import { OrderWithProducts } from "@/src/types";
import useSWR from "swr";
// import { revalidatePath } from "next/cache";

// async function getPendingOrders() {}

export default /* async */ function OrdersPage() {
  const url = "/admin/orders/api";

  // Fetcher para SWR
  const fetcher = () =>
    fetch(url).then((res) => res.json().then((data) => data));
  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });

  if (isLoading) return <span className="loader"></span>;

  if (error) return <p>Error...</p>;

  // const orders = await getPendingOrders();

  // const refreshOrders = async () => {
  //   "use server";
  //   revalidatePath("/admin/orders");
  // };

  if (data)
    return (
      <>
        <Heading>Administrar Ordenes</Heading>

        {/* <form action={refreshOrders}>
        <input
          type="submit"
          value="Actualizar ordenes"
          className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer "
        />
      </form> */}

        {data.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
            {data.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p className="text-center">No hay ordenes pendientes</p>
        )}
      </>
    );
}
