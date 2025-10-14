import type { RouteLocationNormalized } from 'vue-router';

interface BasicOption {
  label: string;
  value: string;
}

/** 用户信息 */
interface UserInfo {
  /**
   * 头像
   */
  avatar: string;
  /**
   * 用户昵称
   */
  realName: string;
  /**
   * 用户角色
   */
  roles?: string[];
  /**
   * 用户id
   */
  userId: string;
  /**
   * 用户名
   */
  username: string;
  /**
   * 用户描述
   */
  desc: string;
  /**
   * 首页地址
   */
  homePath: string;
  /**
   * accessToken
   */
  token: string;
}

interface TabDefinition extends RouteLocationNormalized {
  /**
   * 标签页的key
   */
  key?: string;
}

type ClassType = Array<object | string> | object | string;

export type { BasicOption, ClassType, TabDefinition, UserInfo };
