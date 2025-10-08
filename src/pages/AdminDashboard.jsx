import React from "react";
import {
  FiTrendingUp,
  FiShoppingCart,
  FiUserPlus,
  FiBox,
} from "react-icons/fi";

const StatCard = ({ title, value, delta, icon, accent }) => (
  <div className="card rounded-xl shadow-sm border p-6 flex-1 min-w-[200px] relative overflow-hidden">
    <div className={`absolute left-0 top-0 h-full w-1 ${accent}`} />
    <div className="absolute right-4 top-4 text-gray-400">{icon}</div>
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-extrabold text-gray-900 mt-4">{value}</div>
      <div className="text-sm text-gray-400 mt-1">{delta}</div>
    </div>
  </div>
);

const sampleData = {
  stats: {
    revenue: "$45,231.89",
    revenueDelta: "+20.1% from last month",
    sales: "+12,234",
    salesDelta: "+19% from last month",
    customers: "+235",
    customersDelta: "+180.1% from last month",
    productsInStock: "5,210",
    productsDelta: "-2% from last month",
  },
  recentOrders: [
    {
      id: "1",
      number: "#1001",
      customer: "Max Robinson",
      total: "$1,234.00",
      status: "Paid",
      date: "2025-10-07",
    },
    {
      id: "2",
      number: "#1002",
      customer: "Aisha Khan",
      total: "$523.50",
      status: "Pending",
      date: "2025-10-06",
    },
    {
      id: "3",
      number: "#1003",
      customer: "Chen Li",
      total: "$2,120.00",
      status: "Paid",
      date: "2025-10-05",
    },
  ],
};

const AdminDashboard = () => {
  // Use static sample data to match the provided screenshot (no API fetch)
  const stats = sampleData.stats;
  // show no recent orders in the panel per screenshot
  const recentOrders = [];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-extrabold">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Overview of key metrics and recent activity
          </p>
        </div>

        <div className="flex items-center gap-3">
          <input
            placeholder="Search orders, products..."
            className="border border-gray-200 rounded-md px-3 py-2 text-sm max-w-xs w-full md:w-64"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <StatCard
          title="Total Revenue"
          value={stats.revenue}
          delta={stats.revenueDelta}
          icon={<FiTrendingUp />}
          accent="bg-brand"
        />
        <StatCard
          title="Sales"
          value={stats.sales}
          delta={stats.salesDelta}
          icon={<FiShoppingCart />}
          accent="bg-brand"
        />
        <StatCard
          title="New Customers"
          value={stats.customers}
          delta={stats.customersDelta}
          icon={<FiUserPlus />}
          accent="bg-brand"
        />
        <StatCard
          title="Products in Stock"
          value={stats.productsInStock}
          delta={stats.productsDelta}
          icon={<FiBox />}
          accent="bg-brand"
        />
      </div>
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold">Recent Orders</h2>
          <div className="text-sm text-gray-500">
            An overview of the most recent orders.
          </div>
        </div>

        {recentOrders.length === 0 ? (
          <div className="text-gray-500">
            Recent orders will be displayed here.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="py-2">Order</th>
                  <th className="py-2">Customer</th>
                  <th className="py-2">Total</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((o) => (
                  <tr key={o.id} className="border-t">
                    <td className="py-3">{o.number}</td>
                    <td className="py-3">{o.customer}</td>
                    <td className="py-3">{o.total}</td>
                    <td className="py-3">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          o.status === "Paid"
                            ? "bg-green-100 text-green-800"
                            : o.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {o.status}
                      </span>
                    </td>
                    <td className="py-3 text-gray-500">{o.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
