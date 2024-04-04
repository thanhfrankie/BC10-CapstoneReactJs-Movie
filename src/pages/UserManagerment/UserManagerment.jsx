import React, { Fragment, useContext, useEffect, useState } from "react";
import { Table, Tag } from "antd";
import Search from "antd/es/input/Search";
import {
  EditOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDung";
import { NavLink } from "react-router-dom";
import { NotifyContext } from "../../template/AdminTemplate/AdminTemplate";

const UserManagerment = () => {
  const notify = useContext(NotifyContext);
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await quanLyNguoiDungServ.getListUser();
      setListUser(result.data.content);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSearch = async (value) => {
    try {
      const result = await quanLyNguoiDungServ.findUser({
        params: { tuKhoa: value },
      });
      setListUser(result.data.content);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (value.trim() === "") {
      fetchData();
    }
  };

  const handleDeleteUser = async (taiKhoan) => {
    if (window.confirm("Bạn chắc chắn muốn xoá người dùng này?")) {
      try {
        await quanLyNguoiDungServ.deleteUser(taiKhoan);
        notify("Xoá người dùng thành công!");
        fetchData();
      } catch (err) {
        notify("đã xảy ra lỗi, không thể xoá người dùng");
      }
    }
  };

  const columns = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số Điện thoại",
      dataIndex: "soDT",
      key: "soDT",
    },
    {
      title: "Mật Khẩu",
      dataIndex: "matKhau",
      key: "matKhau",
    },
    {
      title: "Mã Loại",
      key: "maLoaiNguoiDung",
      dataIndex: "maLoaiNguoiDung",
      render: (text) => {
        let color = text.trim() === "QuanTri" ? "red" : "green";
        return <Tag color={color}>{text.toUpperCase()}</Tag>;
      },
    },
    {
      title: " Actions",
      dataIndex: "hanhDong",
      render: (_, user) => {
        return (
          <Fragment>
            <div className="text-center">
              <span
                style={{ cursor: "pointer" }}
                key={2}
                className="text-2xl mr-5"
                onClick={() => handleDeleteUser(user.taiKhoan)}
              >
                <button className="text-red-600">
                  <UserDeleteOutlined />
                </button>
              </span>
              <NavLink
                key={3}
                className=" text-2xl"
                to={`/admin/quan-li-nguoi-dung/edit-nguoi-dung/${user.taiKhoan}`}
              >
                <button className="text-orange-400">
                  <EditOutlined />
                </button>
              </NavLink>
            </div>
          </Fragment>
        );
      },

      width: "15%",
      align: "center",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  // const { Search } = Input;

  return (
    <div className="container">
      <h3 className="text-3xl mb-5">Quản lý người dùng</h3>
      <NavLink
        key={1}
        className="mb-5 text-2xl"
        to="/admin/quan-li-nguoi-dung/them-nguoi-dung"
      >
        <button className="text-blue-400 ">
          Add User
          <UserAddOutlined className="ml-2" />
        </button>
      </NavLink>
      <br />
      <Search
        className="mb-5 mt-5 custom-search-input w-1/2"
        placeholder="Tìm tài khoản"
        allowClear
        size="large"
        onSearch={handleSearch}
        onChange={handleInputChange}
      />
      <Table columns={columns} dataSource={listUser} onChange={onChange} />
    </div>
  );
};

export default UserManagerment;
