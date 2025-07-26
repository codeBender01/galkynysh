import React from "react";
import { Button, Avatar } from "antd";
import { FileTextOutlined, UserOutlined } from "@ant-design/icons";

interface ProfileHeaderProps {
  userName: string;
  phoneNumber: string;
  transactionCount: number;
  contactCount: number;
  avatarUrl?: string;
  onEditClick?: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  userName,
  phoneNumber,
  transactionCount,
  contactCount,
  avatarUrl,
  onEditClick,
}) => {
  return (
    <div className="relative w-full bg-white rounded-lg border-2 border-blue-200 overflow-hidden">
      {/* Green gradient background with decorative circles */}
      <div className="relative h-48 bg-gradient-to-br from-green-400 via-green-500 to-green-600 overflow-hidden">
        {/* Logo */}
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-green-600 font-bold text-lg">G</span>
          </div>
          <span className="text-white font-semibold text-xl">Galkynyş</span>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 bg-opacity-30 rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-700 bg-opacity-20 rounded-full transform translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-300 bg-opacity-20 rounded-full"></div>

        {/* Edit button */}
        <div className="absolute top-6 right-6">
          <Button
            type="primary"
            className="bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 rounded-lg px-6"
            onClick={onEditClick}
          >
            Üýtget
          </Button>
        </div>
      </div>

      {/* White bottom section */}
      <div className="relative bg-white px-6 pt-16 pb-6">
        {/* Avatar positioned to overlap both sections */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
          <div className="relative">
            <Avatar
              size={96}
              src={avatarUrl}
              className="border-4 border-white shadow-lg"
            >
              👨‍💼
            </Avatar>
          </div>
        </div>

        {/* User info */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            {userName}
          </h2>
          <p className="text-gray-500 text-sm">{phoneNumber}</p>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-16 mt-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <FileTextOutlined className="text-gray-600 text-lg" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {transactionCount.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Tranzaksiyalar</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <UserOutlined className="text-gray-600 text-lg" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {contactCount.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Kontakty</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
