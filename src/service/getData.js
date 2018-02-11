import fetch from '../config/fetch'
const testUrl = 'http://www.aituyou.com:12112'
const configUrl = 'http://121.40.68.137:12111'
const upTokenUrl = 'http://www.aituyou.com:13001'
// 获取视频列表
const vedioApi = (type = 'get', obj = {}) => fetch(type, `${upTokenUrl}/api/v1/cardvr/info`, obj);
// 删除
const vedioDel = (type = 'get', obj = {}) => fetch(type, `${upTokenUrl}/api/v1/cardvr/delete`, obj);

// 通知后台上传
const uploadVideo = (type = 'get', obj = {}) => fetch(type, `${upTokenUrl}/api/v1/cardvr/upload`, obj);
const progressVideo = (type = 'get', obj = {}) => fetch(type, `${upTokenUrl}/api/v1/cardvr/progress`, obj);
// 获取报警记录
const warnHisList = (type = 'get', obj = {}) => fetch(type, `${upTokenUrl}/api/v1/cardvr/event`, obj);


// 获取设备列表
const deviceApi = (type = 'get', obj = {}) => fetch(type, `/api/v1/device/list`, obj);
// 获取总数
const deviceCount = (type = 'get', obj = {}) => fetch(type, `/api/v1/device/listCount`, obj);
// 查询设备状态信息（存不存在）
const deviceInfo = (type = 'get', obj = {}) => fetch(type, `/api/v1/device/status`, obj);
//查询设备是否存在
const hasImei = deviceInfo;
// 获取组全部信息
const deviceGroup = (type = 'get', obj = {}) => fetch(type, `/api/v1/device/groups`, obj);
// 根据组名查询
const nameGroup = (type = 'get', obj = {}) => fetch(type, `/api/v1/device/groupStatus`, obj);


// 设备入库
const addDevice = (type = 'get', obj = {}) => fetch(type, `/api/v1/device/register`, obj);
// 设备出库
const delDevice = (type = 'get', obj = {}) => fetch(type, `/api/v1/device/soldout`, obj);
// 修改设备信息
const updateDevice = (type = 'get', imei, obj = {}) => fetch(type, `/api/v1/device/status?imei=${imei}`, obj);
// 统计报表
const getReport = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/vw/cardvr/staticalReport`, obj);


// 用户api
const userApi = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/vw/cardvr/user`, obj);
// 用户登录
const login = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/vw/cardvr/login`, obj);

// 振动参数Api
const shakeApi = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/vw/cardvr/shakeSensity`, obj);
// 重置
const refreShake = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/vw/cardvr/shakeSensityReset`, obj);

// 获取推送记录
const getPushList = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/push/record`, obj);
//推送单台
const pushOne = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/push/one`, obj);
// 推送组
const pushGroup = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/push/group`, obj);
// 获取配置记录
const devPramHis = (type = 'get', obj = {}) => fetch(type, `${configUrl}/api/v1/configuration/record`, obj);
//获取单设备配置
const onePram = (type = 'get', obj = {}) => fetch(type, `${configUrl}/api/v1/configuration/one`, obj);
//获取组配置
const groupPram = (type = 'get', obj = {}) => fetch(type, `${configUrl}/api/v1/configuration/group`, obj);
//修改组配置
const editGroupPram = (type = 'get', obj = {}) => fetch(type, `${configUrl}/api/v1/configuration/modify/group`, obj);
// 修改单个用户
const editDevOne = (type = 'get', obj = {}) => fetch(type, `${configUrl}/api/v1/configuration/modify/one`, obj); 

//获取青牛token
var getToken = (type = 'get', obj = {}) => fetch("get", `${upTokenUrl}/api/v1/cardvr/uploadToken?module=picture`, {})

// 获取轨迹
var getLineData = (type = 'get', obj = {}) => fetch("get", `http://www.aituyou.com:3000/gps`, {})


// 删除版本
export {
	vedioApi,
	deviceApi,
	vedioDel,
	uploadVideo,
	addDevice,
	deviceCount,
	progressVideo,
	getReport,
	userApi,
	login,
	shakeApi,
	refreShake,
	deviceGroup,
	nameGroup,
	deviceInfo,
	getPushList,
	hasImei,
	pushOne,
	pushGroup,
	devPramHis,
	groupPram,
	editGroupPram,
	editDevOne,
	delDevice,
	getToken,
	onePram,
	warnHisList,
	updateDevice,
	getLineData
}