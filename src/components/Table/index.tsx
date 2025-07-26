import React from "react";
import { Table, Tag, Avatar } from "antd";
import type { ColumnsType } from "antd/es/table";

interface UserData {
  key: string;
  name: string;
  date: string;
  phone: string;
  region: string;
  balance: number;
  avatar: string;
  transaction: number;
}

const data: UserData[] = [
  {
    key: "1",
    name: "Aman Amanow",
    date: "09.01.2025",
    phone: "+993 65 123123",
    region: "Ahal",
    balance: 100,
    avatar: "👨‍💼",
    transaction: 100,
  },
  {
    key: "2",
    name: "Mammedowa Maysa",
    date: "09.01.2025",
    phone: "+993 65 122423",
    region: "Mary",
    balance: 240,
    avatar: "👩‍💼",
    transaction: 100,
  },
  {
    key: "3",
    name: "Öwezow Nazar",
    date: "08.01.2025",
    phone: "+993 65 345123",
    region: "Lebap",
    balance: 342,
    avatar: "👨‍🦱",
    transaction: 100,
  },
  {
    key: "4",
    name: "Meylis Meýlisow",
    date: "07.01.2025",
    phone: "+993 65 123123",
    region: "Aşgabat",
    balance: 22,
    avatar: "👨‍💻",
    transaction: 100,
  },
];

const getRegionColor = (region: string) => {
  const colors: { [key: string]: string } = {
    Ahal: "cyan",
    Mary: "orange",
    Lebap: "blue",
    Aşgabat: "volcano",
  };
  return colors[region] || "default";
};

const columns: ColumnsType<UserData> = [
  {
    title: <span className="text-gray-500 font-medium">Ulanyjy</span>,
    dataIndex: "name",
    key: "name",
    render: (text: string, record: UserData) => (
      <div className="flex items-center space-x-3 gap-2">
        <Avatar size={40} className="bg-blue-100">
          {record.avatar}
        </Avatar>
        <div>
          <div className="font-medium text-gray-900">{text}</div>
          <div className="text-sm text-gray-500">{record.date}</div>
        </div>
      </div>
    ),
  },
  {
    title: <span className="text-gray-500 font-medium">Telefon Belgisi</span>,
    dataIndex: "phone",
    key: "phone",
    render: (phone: string) => <span className="text-gray-700">{phone}</span>,
  },
  {
    title: <span className="text-gray-500 font-medium">Region</span>,
    dataIndex: "region",
    key: "region",
    render: (region: string) => (
      <Tag
        color={getRegionColor(region)}
        className="rounded-full px-3 py-1 text-sm font-medium"
      >
        {region}
      </Tag>
    ),
  },
  {
    title: <span className="text-gray-500 font-medium">Balans</span>,
    dataIndex: "balance",
    key: "balance",
    render: (balance: number) => (
      <span className="font-semibold text-gray-900">{balance}</span>
    ),
  },
  {
    title: <span className="text-gray-500 font-medium">Tranzaksiýa sany</span>,
    dataIndex: "transaction",
    key: "transaction",
    render: (balance: number) => (
      <span className="font-semibold text-gray-900">{balance}</span>
    ),
  },
];

interface TableProps {
  isTransactionNeeded: boolean;
}

const UsersTable: React.FC<TableProps> = ({ isTransactionNeeded }) => {
  return (
    <div className="p-6 bg-white shadow-lg flex-1 rounded-xl">
      <Table
        columns={
          isTransactionNeeded ? columns : columns.slice(0, columns.length - 1)
        }
        dataSource={data}
        pagination={false}
        className="custom-table"
        rowClassName="hover:bg-gray-50"
      />

      <style>{`
        .custom-table .ant-table {
          border-radius: 8px;
        }
        
        .custom-table .ant-table-thead > tr > th {
          background-color: transparent !important;
          border-bottom: 1px solid #e5e7eb !important;
          padding: 16px !important;
          font-weight: 500 !important;
        }
        
        .custom-table .ant-table-tbody > tr > td {
          padding: 16px !important;
          border-bottom: 1px solid #f3f4f6 !important;
        }
        
        .custom-table .ant-table-tbody > tr:last-child > td {
          border-bottom: none !important;
        }
        
        .custom-table .ant-table-tbody > tr:hover > td {
          background-color: #f9fafb !important;
        }
      `}</style>
    </div>
  );
};

export default UsersTable;
