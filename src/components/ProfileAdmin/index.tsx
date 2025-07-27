import React from "react";
import { Avatar } from "antd";
import { FileTextOutlined, UserOutlined } from "@ant-design/icons";
import avatar from "../../assets/avatar1.png";
import logo from "../../assets/logo.png";

import bg from "../../assets/bgProfile.png";

import CustomButton from "../Button";

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
}) => {
  return (
    <div className="relative w-full bg-white rounded-lg border-2 border-[#EAEFF4] overflow-hidden">
      {/* Green gradient background with decorative circles */}
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative h-48 overflow-hidden"
      >
        <div className="absolute top-[35%] left-6 flex items-center space-x-2">
          <div className="h-[44px]">
            <img src={logo} alt="" className="w-[100%] h-[100%]" />
          </div>
        </div>

        {/* Decorative circles */}
      </div>

      {/* White bottom section */}
      <div className="relative bg-white px-6 pt-16 pb-6">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
          <div className="relative">
            <Avatar
              size={96}
              src={avatar}
              className="border-4 border-white shadow-lg"
            ></Avatar>
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
        <div className="absolute left-5 bottom-5 z-10 flex justify-center space-x-16 mt-6">
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
        <CustomButton
          text="Üýtget"
          style={{
            fontSize: 14,
            fontFamily: "PopSemi",
            color: "white",
            position: "absolute",
            right: "20px",
            backgroundColor: "#13A538",
            height: 36,
            bottom: "40px",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
