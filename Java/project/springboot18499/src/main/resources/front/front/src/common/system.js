export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"地区信息","menuJump":"列表","tableName":"cunxinxi"}],"menu":"地区信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除","首页总数","首页统计","添加成员","帮扶结对","调研"],"menu":"孤寡与贫困户","menuJump":"列表","tableName":"pinkunhu"}],"menu":"孤寡与贫困户管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除"],"menu":"家庭成员","menuJump":"列表","tableName":"jiatingchengyuan"}],"menu":"家庭成员管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","修改","删除","审核","首页总数","首页统计"],"menu":"孤寡与贫困户申请","menuJump":"列表","tableName":"pinkunshenqing"}],"menu":"孤寡与贫困户申请管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","修改","删除"],"menu":"孤寡与贫困户调研","menuJump":"列表","tableName":"pinkundiaoyan"}],"menu":"孤寡与贫困户调研管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改","删除"],"menu":"帮扶结对","menuJump":"列表","tableName":"bangfujiedui"}],"menu":"帮扶结对管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除"],"menu":"帮扶与募捐记录","menuJump":"列表","tableName":"bangfujilu"}],"menu":"帮扶与募捐记录管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"诉求留言","tableName":"messages"}],"menu":"诉求留言"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-medal","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"政策解读","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看"],"menu":"孤寡与贫困户申请列表","menuJump":"列表","tableName":"pinkunshenqing"}],"menu":"孤寡与贫困户申请模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"孤寡与贫困户申请","menuJump":"列表","tableName":"pinkunshenqing"}],"menu":"孤寡与贫困户申请管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看"],"menu":"孤寡与贫困户申请列表","menuJump":"列表","tableName":"pinkunshenqing"}],"menu":"孤寡与贫困户申请模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
