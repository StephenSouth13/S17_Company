import React from 'react';
import Link from "next/link";
import Image from "next/image"; // 👈 Import component Image từ Next.js
import { cn } from "@/lib/utils";

// Định nghĩa props để chấp nhận kích thước tùy chỉnh
const Logo = ({ className, width = 150, height = 40 }: {className?: string, width?: number, height?: number}) => {
  return (
    <Link href={"/"}>
      <div 
        className={cn("flex items-center justify-center", className)}
        style={{ width: width, height: height }} // Đảm bảo div chứa có kích thước cố định
      >
        <Image 
          src="/logo/s17_logo.png" // 👈 Đổi đường dẫn này thành file logo của bạn
          alt="S17 Company Logo"
          width={width} // Lấy từ props
          height={height} // Lấy từ props
          priority // (Tùy chọn) Ưu tiên tải hình ảnh này
          className="object-contain" // Đảm bảo logo vừa vặn trong kích thước đã cho
        />
      </div>
    </Link>
  );
};

export default Logo;