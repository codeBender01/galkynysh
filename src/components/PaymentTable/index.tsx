import React from "react";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

export interface ContactData {
  key: string;
  name: string;
  date: string;
  phone: string;
  role: string;
}

interface ContactTableProps {
  data?: ContactData[];
}

const ContactTable: React.FC<ContactTableProps> = ({ data = [] }) => {
  const columns: ColumnsType<ContactData> = [
    {
      title: "Ady",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: ContactData) => (
        <div>
          <div style={{ fontWeight: 500, marginBottom: 4 }}>{text}</div>
          <div style={{ color: "#999", fontSize: "12px" }}>{record.date}</div>
        </div>
      ),
    },
    {
      title: "Bellik",
      dataIndex: "phone",
      key: "phone",
      align: "center",
      render: (phone: string) => <span style={{ color: "#999" }}>{phone}</span>,
    },
    {
      title: "Ularyjy",
      dataIndex: "role",
      key: "role",
      align: "right",
      render: (role: string) => (
        <Tag
          color="cyan"
          style={{
            backgroundColor: "#e6fffb",
            color: "#13c2c2",
            border: "none",
            borderRadius: "4px",
            padding: "2px 8px",
          }}
        >
          {role}
        </Tag>
      ),
    },
  ];

  const defaultData: ContactData[] = [
    {
      key: "1",
      name: "Haýyr sahabat",
      date: "09.01.2025",
      phone: "+993 65 123123",
      role: "Admin",
    },
    {
      key: "2",
      name: "Gaýra goýulmasyz",
      date: "09.01.2025",
      phone: "+993 65 123123",
      role: "Admin",
    },
    {
      key: "3",
      name: "Beýlekiler",
      date: "09.01.2025",
      phone: "+993 65 123123",
      role: "Admin",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <style>{`
        .contact-table .ant-table-thead > tr > th {
          background-color: transparent !important;
          color: #999 !important;
          font-weight: 400 !important;
          font-size: 13px !important;
          border-bottom: 1px solid #f0f0f0 !important;
          padding: 16px !important;
        }
          .contact-table .ant-table {
          box-shadow: none !important;

          }
        .contact-table .ant-table-tbody > tr > td {
          padding: 16px !important;
          border-bottom: 1px solid #f0f0f0 !important;
        }
        .contact-table .ant-table-tbody > tr:last-child > td {
          border-bottom: none !important;
        }
        .contact-table .ant-table-tbody > tr:hover > td {
          background-color: #fafafa !important;
        }
      `}</style>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Table<ContactData>
          columns={columns}
          dataSource={data.length > 0 ? data : defaultData}
          pagination={false}
          showHeader={true}
          size="large"
          className="contact-table"
          style={{
            backgroundColor: "white",
          }}
        />
      </div>
    </div>
  );
};

export default ContactTable;
