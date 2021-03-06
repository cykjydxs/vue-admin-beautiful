import { mock } from "mockjs";
const totalCount = 3;
const List = [
  {
    id: "@id",
    userName: "admin",
    password: "admin",
    email: "@email",
    permissions: ["admin"],
    datatime: "@datetime",
  },
  {
    id: "@id",
    userName: "editor",
    password: "editor",
    email: "@email",
    permissions: ["editor"],
    datatime: "@datetime",
  },
  {
    id: "@id",
    userName: "test",
    password: "test",
    email: "@email",
    permissions: ["admin", "editor"],
    datatime: "@datetime",
  },
];
export default [
  {
    url: "/userManagement/getList",
    type: "post",
    response: (config) => {
      const { title = "", pageNo = 1, pageSize = 20 } = config.body;
      let mockList = List.filter((item) => {
        if (title && item.title.indexOf(title) < 0) return false;
        return true;
      });
      const pageList = mockList.filter(
        (item, index) =>
          index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
      );
      return {
        code: 200,
        msg: "success",
        totalCount,
        data: pageList,
      };
    },
  },
  {
    url: "/userManagement/doEdit",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "模拟保存成功",
      };
    },
  },
  {
    url: "/userManagement/doDelete",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "模拟删除成功",
      };
    },
  },
];
