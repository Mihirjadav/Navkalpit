import React, { useEffect, useState } from "react";
import { listOrders } from "../../utils/adminApi";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    listOrders().then(setOrders);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Orders</h2>
        <div className="text-sm text-gray-500">Recent orders</div>
      </div>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-4 rounded md:col-span-1">
          <div className="text-sm text-gray-500">Total orders</div>
          <div className="text-3xl font-bold">{orders.length}</div>
        </div>
        <div className="md:col-span-2 space-y-4">
          {orders.length === 0 && (
            <div className="text-gray-500">No orders yet (demo).</div>
          )}
          {orders.map((o) => (
            <div key={o.id} className="card p-4 rounded">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">Order #{o.id}</div>
                  <div className="text-sm text-gray-500">{o.email || "—"}</div>
                </div>
                <div className="text-sm">
                  {o.items ? o.items.length : 0} items
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
