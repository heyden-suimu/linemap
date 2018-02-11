import {
	groupPram
} from './getData'

//青牛url
export const qnUrl = "http://p20l0chcs.bkt.clouddn.com/"
//tts
export const category_tts = {
	"module": "tts",
	"content": {
		"mode": "tts",
		"role": "xbot",
		"content": "啦啦啦"
	},
	"handleType": 1
};
//poi推送
export const category_opi = {
	"content": {
		"id": "poi推送",
		"displayType": "chat",
		"autoClose": true,
		"version": 2,
		"name": "poi推送",
		"dialogs": [{
			"id": 0,
			"recognizerType": "poi",
			"forget": true,
			"speech": {
				"content": "小宝收到手机设置导航地址，现在是否要开启导航",
				"mode": "tts"
			},
			"onFailed": {
				"err_no_match_answer": {
					"action": "return"
				}
			},
			"onSuccess": {
				"tsd.command.SHUT_UP": {
					"action": "return"
				},
				"tsd.command.EXIT": {
					"action": "return"
				},
				"tsd.command.NEGATIVE": {
					"action": "return"
				},
				"tsd.command.POSITIVE": {
					"message": "tsd.push.nav.dest",
					"action": "return",
					"speech": {
						"content": "小宝现在导航到上海市上海市闵行区喜宴预订中心",
						"mode": "tts"
					},
					"params": "{\"lng\": \"121.390676\",\"lat\": \"31.17047\",\"name\": \"上海市上海市闵行区喜宴预订中心\" }"
				}
			}
		}]
	},
	"module": "interaction"
};
//图片推送
export const category_img = {
	"module": "interaction",
	"content": {
		"id": "ADS_1",
		"name": "ADS_1",
		"version": 2,
		"imageUrl": "",
		"autoCloseTimeout": 30,
		"autoClose": true,
		"displayType": "ads",
		"dialogs": [{
			"id": 0,
			"recognizerType": "general",
			"forget": true,
			"onSuccess": {
				"tsd.command.SHUT_UP": {
					"action": "return"
				},
				"tsd.command.EXIT": {
					"action": "return"
				},
				"tsd.command.NEGATIVE": {
					"action": "return"
				}
			},
			"onFailed": {
				"err_net": {
					"action": "return"
				},
				"err_record": {
					"action": "return"
				},
				"err_recog": {
					"action": "return"
				},
				"err_no_match_answer": {
					"action": "jump",
					"next": {
						"did": 1
					}
				},
				"err_no_speech": {
					"action": "jump",
					"next": {
						"did": 1
					}
				}
			}
		}, {
			"id": 1,
			"recognizerType": "general",
			"forget": true,
			"onSuccess": {
				"tsd.command.SHUT_UP": {
					"action": "return"
				},
				"tsd.command.EXIT": {
					"action": "return"
				},
				"tsd.command.NEGATIVE": {
					"action": "return"
				}
			},
			"onFailed": {
				"err_net": {
					"action": "return"
				},
				"err_record": {
					"action": "return"
				},
				"err_recog": {
					"action": "return"
				},
				"err_no_match_answer": {
					"action": "jump",
					"next": {
						"did": 1
					}
				},
				"err_no_speech": {
					"action": "jump",
					"next": {
						"did": 1
					}
				}
			}
		}]
	}
};

let _config = {
	"lY38HF3KKYISSLleZvlZx/ZKH/0=": {
		"musicFocusLossBehavior": true
	},
	"ph549h/bRx6XP/f4dakzNaBZRfo=": {
		"podcastFocusLossBehavior": false
	},
	"zuc8QR1UlfTOgu9djK7+NJ+4uYk=": {
		"diskSpaceForLeft": 2048
	},
	"b+sCc1JsaoBdYxqxnH4PaGsZKyA=": {
		"frontCameraToggle": {
			"openCamera": true,
			"showPreview": false,
			"recording": true
		},
		"backCameraToggle": {
			"openCamera": true,
			"showPreview": false,
			"recording": false
		},
		"insideCameraToggle": {
			"openCamera": false,
			"showPreview": false,
			"recording": false
		},
		"frontVideoConfig": {
			"isMute": true,
			"showWaterMark": true,
			"duration": 60,
			"resolution": "720P",
			"frameRate": 20,
			"bitRate": 4
		},
		"backVideoConfig": {
			"isMute": true,
			"showWaterMark": true,
			"duration": 60,
			"resolution": "576P",
			"frameRate": 20,
			"bitRate": 4
		},
		"insideVideoConfig": {
			"isMute": true,
			"showWaterMark": true,
			"duration": 60,
			"resolution": "576P",
			"frameRate": 20,
			"bitRate": 4
		},
		"otherConfig": {
			"recordType": 2,
			"speedAutoCapture": 1,
			"sensorAutoCapture": 1,
			"speedAutoRecord": 1,
			"sensorAutoRecord": 1,
			"captureUploadUrl": "",
			"videoUploadUrl": ""
		},
		"prevShortVideoConfig": {
			"isMute": true,
			"duration": 10,
			"resolution": "720P",
			"frameRate": 15,
			"bitRate": 1
		},
		"nextShortVideoConfig": {
			"isMute": true,
			"duration": 10,
			"resolution": "720P",
			"frameRate": 15,
			"bitRate": 1
		}
	},
	"7bMkKLuAlehUGpUNFX3NhXxItXY=": {
		"ssidName": "XiaoBao_WIFI",
		"ssidPwd": "12345678",
		"screenOffTime": "3",
		"fmFrequency": "88.8",
		"wifiEnable": "false",
		"fmEnable": "false"
	},
	"XxTL0cSLXqQ7n2/G/HgEIJlxjoE=": {
		"enableMqtt": true,
		"powerMonitorToggle": true,
		"temperatureMonitorToggle": true,
		"splash": {
			"welcomeSwitch": false,
			"byeSwitch": false,
			"welcomeImage": "",
			"byeImage": "",
			"welcomeTts": "",
			"byeTts": ""
		},
		"powerMonitorPolicy": {
			"interval": 20000,
			"accon": {
				"policies": {
					"policies": [{
						"interval": 10000,
						"voltage": 115,
						"notices": [
							"汽车电池电量已不足，请谨慎使用"
						]
					}, {
						"interval": 10000,
						"voltage": 118
					}, {
						"interval": 20000,
						"voltage": 200
					}]
				}
			}
		},
		"temperatureMonitorPolicy": {
			"interval": 10000,
			"accon": {
				"policies": {
					"policiesincrease": [{
						"temp": 110,
						"stopbusinesses": [
							"media",
							"navigation"
						],
						"notices": [
							"小宝好热啊，跪求空调"
						]
					}, {
						"temp": 105,
						"notices": [
							"小宝好热啊，跪求空调"
						]
					}],
					"policiesdecrease": [{
						"temp": 104
					}, {
						"temp": 109
					}]
				}
			}
		}
	},
	"VEKndri8zP4wJjvYENIlSiFAVR8=": {
		"ipRole": 0,
		"ttsRole": 0,
		// "greetings": JSON.stringify({
		// 	"greetings": [{
		// 		"greets": [{
		// 			"role": "xbot",
		// 			"content": "大晚上的，不睡觉，又出去鬼混",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，要早点休息啊，睡得晚对皮肤不好",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "这么晚了，赶快睡觉吧，不然明天要起不来了",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，这么晚了还开车，一定要注意安全啊",
		// 			"mode": "tts"
		// 		}],
		// 		"time_begin": "00: 00",
		// 		"time_end": "04: 00"
		// 	}, {
		// 		"greets": [{
		// 			"role": "xbot",
		// 			"content": "亲爱的，这么早就出门了，要打起精神啊",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "这么早就出门了，小宝给你32个赞",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "长得丑的还在睡着，长得帅的已经出发啦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，这么早出门，路上注意安全啊",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "有人问小宝，大早上起床是什么样的体验，小宝淡定地说，宝宝心里苦，但宝宝不说",
		// 			"mode": "tts"
		// 		}],
		// 		"time_begin": "04: 00",
		// 		"time_end": "07: 00"
		// 	}, {
		// 		"greets": [{
		// 			"role": "xbot",
		// 			"content": "亲爱的，人是铁饭是钢，一定要记得吃早饭哦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，早安，崭新的一天，心情美美哒",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，路上车多人多，记得放慢车速，多注意安全哦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "太阳当空照，花儿对我笑，小鸟说早早早，小宝说好好好",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "一年之计在于春，一日之计在于晨，那我们早点出发吧",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "有人问小宝，为什么你每天都乐呵呵的，小宝说，因为爱笑的人运气通常不会太差啊",
		// 			"mode": "tts"
		// 		}],
		// 		"time_begin": "07: 00",
		// 		"time_end": "09: 30"
		// 	}, {
		// 		"greets": [{
		// 			"role": "xbot",
		// 			"content": "哎呀，大家都在搬砖呢，你竟然出来兜风，小宝要去打小报告啦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，这会儿路上虽然不怎么堵了，还是要多多注意安全哦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "路上车少了，要少开空调多开窗，多呼吸新鲜的空气哦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "哎呀，这上午过的好快啊，一会儿就快到中午了呢，小宝还有点小饿呢",
		// 			"mode": "tts"
		// 		}],
		// 		"time_begin": "09: 30",
		// 		"time_end": "12: 00"
		// 	}, {
		// 		"greets": [{
		// 			"role": "xbot",
		// 			"content": "孔子曰：中午不睡，下午崩溃。孟子曰：孔子说的对!",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "中午不睡觉下午会犯困的，记得抽空眯一会哦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，如果你真的困了就休息会儿啊，不然小宝会心疼的",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "现在是午饭时间了，工作再忙也别忘记吃午饭哦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，饭后大脑充血容易犯困，开车要打起精神哦",
		// 			"mode": "tts"
		// 		}],
		// 		"time_begin": "12: 00",
		// 		"time_end": "14: 00"
		// 	}, {
		// 		"greets": [{
		// 			"role": "xbot",
		// 			"content": "中午养足了精神了吗？让我陪你度过一个美好的下午吧",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "下午阳光会很刺眼，记得打开遮光板哦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "下午光线比较强，容易反光，记得调节好小宝的角度哦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，下午好啊，让我们打起精神，愉快地出发吧",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，下午容易犯困，听听有节奏感的音乐可以提神",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，如果实在困了，不要强撑着，记得靠边停车休息一下再出发哦",
		// 			"mode": "tts"
		// 		}],
		// 		"time_begin": "14: 00",
		// 		"time_end": "17: 30"
		// 	}, {
		// 		"greets": [{
		// 			"role": "xbot",
		// 			"content": "亲爱的，忙了一天，也饿了吧，记得好好吃顿晚饭哦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，晚高峰车多人多，要谨慎慢行哦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，晚高峰到了，出发前记得看下路况哦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，晚高峰的时候容易堵车，要多听听音乐和段子哦",
		// 			"mode": "tts"
		// 		}],
		// 		"time_begin": "17: 30",
		// 		"time_end": "19: 30"
		// 	}, {
		// 		"greets": [{
		// 			"role": "xbot",
		// 			"content": "亲爱的，吃过晚饭了吗？饭后要少开车多走路，有助于消化还能甩掉游泳圈呢",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "忙了一天了，回家记得洗个热水澡，会有助于睡眠的哦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "你说今晚月光那么美，我说是的，那咱早点回家洗洗睡吧",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，时间也不早了，早点回家歇着吧",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，夜晚好啊，晚上开车容易犯困，多注意安全啊",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "亲爱的，晚上开车，听点醒神的音乐可以提神呢",
		// 			"mode": "tts"
		// 		}],
		// 		"time_begin": "19: 30",
		// 		"time_end": "22: 00"
		// 	}, {
		// 		"greets": [{
		// 			"role": "xbot",
		// 			"content": "亲爱的，睡得好才能精神好，不早了，赶紧回家睡觉吧",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "到现在还不回家睡觉，宝宝有小情绪啦",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "这么晚了还不能睡觉，宝宝心里苦，但宝宝不说",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "听，夜那么安静，看，天空那么美丽，而你还在开车，好可怜呐",
		// 			"mode": "tts"
		// 		}, {
		// 			"role": "xbot",
		// 			"content": "宁静的夜晚，美丽的天空，还有丝丝的微风，小宝祝你今晚好梦哦",
		// 			"mode": "tts"
		// 		}],
		// 		"time_begin": "22: 00",
		// 		"time_end": "24: 00"
		// 	}]
		// }),
		// "interactions": JSON.stringify({
		// 	"scenes": [{
		// 		"id": "DEST_QUERY",
		// 		"name": "DEST_QUERY",
		// 		"version": 2,
		// 		"autoClose": true,
		// 		"displayType": "chat",
		// 		"dialogs": [{
		// 			"id": 0,
		// 			"recognizerType": "poi",
		// 			"forget": true,
		// 			"speech": {
		// 				"content": "请问您要去哪儿？",
		// 				"mode": "tts"
		// 			},
		// 			"onParamMiss": {
		// 				"#location": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 0
		// 					}
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 0
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"tsd.command.MAP": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 0
		// 					}
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "录音出错，小宝先退下了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_recog": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 0
		// 					},
		// 					"speech": {
		// 						"content": "很抱歉，此处只能搜目的地",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_speech": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "没事的话，小宝先退下啦。",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "既然不说话，先退下啦。",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_not_music_found": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "搜索超时，请重试.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_search_failed": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 0
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "搜索失败了，请再试一次吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这次失败了不要紧，再一次就好了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 1,
		// 			"recognizerType": "general",
		// 			"forget": true,
		// 			"speech": {
		// 				"role": "xbot",
		// 				"content": "已搜到'value'，请选择",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			},
		// 			"onSearch": {
		// 				"#location": {
		// 					"conditionSpeeches": {
		// 						"location_single": {
		// 							"role": "xbot",
		// 							"content": "找到了，请问确认，还是取消",
		// 							"mode": "tts"
		// 						},
		// 						"location_multi": {
		// 							"role": "xbot",
		// 							"content": "找到了, 请问选择第几个，还是需要取消",
		// 							"extra": "\t\t请说\n“选择第N个”",
		// 							"mode": "tts"
		// 						}
		// 					}
		// 				}
		// 			},
		// 			"onReselect": {
		// 				"#location": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请说选择第几个或者换个关键字",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请继续",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 1
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.WAKE_UP": {
		// 					"message": "tsd.command.WAKE_UP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TAKE_PICTURE": {
		// 					"message": "tsd.command.TAKE_PICTURE",
		// 					"action": "return"
		// 				},
		// 				"select": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的，请稍候",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"autoSelect": {
		// 					"action": "select",
		// 					"speech": {
		// 						"content": "请稍候",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"tsd.command.POSITIVE": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_recog": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_speech": {
		// 					"action": "select",
		// 					"select": 0,
		// 					"speech": {
		// 						"content": "那小宝帮你选第一个了",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_user_cancelled": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的，再见",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_match_answer_on_push": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_select": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 3
		// 					}
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 2,
		// 			"recognizerType": "general",
		// 			"forget": true,
		// 			"speeches": [{
		// 				"content": "请选择",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			}, {
		// 				"content": "小宝没听懂，请再选一次",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			}, {
		// 				"content": "小宝没听清，请按提示选择",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			}, {
		// 				"content": "请再选一遍吧",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			}],
		// 			"onReselect": {
		// 				"#location": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请说选择第几个或者换个关键字",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请继续",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.WAKE_UP": {
		// 					"message": "tsd.command.WAKE_UP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TAKE_PICTURE": {
		// 					"message": "tsd.command.TAKE_PICTURE",
		// 					"action": "return"
		// 				},
		// 				"select": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的，请稍候",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"tsd.command.POSITIVE": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "那好吧，再见",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_recog": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "那好吧，再见",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_speech": {
		// 					"action": "select",
		// 					"select": 0,
		// 					"speech": {
		// 						"content": "那小宝帮你选第一个了",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_user_cancelled": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的，再见",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_select": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 3
		// 					}
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 3,
		// 			"forget": true,
		// 			"recognizerType": "general",
		// 			"speech": {
		// 				"content": "对不起，小宝没找到这个选项，请重试",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			},
		// 			"onReselect": {
		// 				"#location": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请说选择第几个或者换个关键字",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请继续",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 3
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.WAKE_UP": {
		// 					"message": "tsd.command.WAKE_UP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TAKE_PICTURE": {
		// 					"message": "tsd.command.TAKE_PICTURE",
		// 					"action": "return"
		// 				},
		// 				"select": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的，请稍候",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"tsd.command.POSITIVE": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "那好吧，再见",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_recog": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "那好吧，再见",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_speech": {
		// 					"action": "select",
		// 					"select": 0,
		// 					"speech": {
		// 						"content": "那小宝帮你选第一个了",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_user_cancelled": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的，再见",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_select": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 3
		// 					}
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}]
		// 	}, {
		// 		"id": "GENERIC",
		// 		"name": "GENERIC",
		// 		"version": 2,
		// 		"autoClose": true,
		// 		"dialogs": [{
		// 			"id": 0,
		// 			"recognizerType": "poi",
		// 			"forget": true,
		// 			"speeches": [{
		// 				"role": "xbot",
		// 				"content": "来了来了",
		// 				"mode": "tts"
		// 			}, {
		// 				"role": "xbot",
		// 				"content": "请指示",
		// 				"mode": "tts"
		// 			}, {
		// 				"role": "xbot",
		// 				"content": "请吩咐",
		// 				"mode": "tts"
		// 			}, {
		// 				"role": "xbot",
		// 				"content": "怎么了",
		// 				"mode": "tts"
		// 			}, {
		// 				"role": "xbot",
		// 				"content": "干啥",
		// 				"mode": "tts"
		// 			}, {
		// 				"role": "xbot",
		// 				"content": "来了",
		// 				"mode": "tts"
		// 			}, {
		// 				"role": "xbot",
		// 				"content": "在的",
		// 				"mode": "tts"
		// 			}, {
		// 				"role": "xbot",
		// 				"content": "在呢",
		// 				"mode": "tts"
		// 			}],
		// 			"onParamMiss": {
		// 				"#location": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"call": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 8
		// 					}
		// 				}
		// 			},
		// 			"onNotReady": {
		// 				"callname": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请先手动打开手机上的蓝牙并连接小宝",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"callnumber": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请先手动打开手机上的蓝牙并连接小宝",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_MAP": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_MAP",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MRD": {
		// 					"type": "service",
		// 					"message": "tsd.command.MRD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_MUSIC",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MUSIC": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"tsd.command.MAP": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"tsd.command.JOKE": {
		// 					"type": "service",
		// 					"message": "tsd.command.JOKE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_WIFI_AP": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_WIFI_AP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_WIFI_AP": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_WIFI_AP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TAKE_PICTURE": {
		// 					"type": "service",
		// 					"message": "tsd.command.TAKE_PICTURE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TURN_OFF_SCREEN": {
		// 					"type": "service",
		// 					"message": "tsd.command.TURN_OFF_SCREEN",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TURN_ON_SCREEN": {
		// 					"type": "service",
		// 					"message": "tsd.command.TURN_ON_SCREEN",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.PLAY_COLLECT_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.PLAY_COLLECT_MUSIC",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_MUSIC",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_JOKE": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_JOKE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_MAP": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_MAP",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_FM": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_FM",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_FM": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_FM",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.OPEN_SETTINGS": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_SETTINGS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_SETTINGS": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_SETTINGS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MEDIA_NEXT": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_NEXT",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PREV": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_PREV",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PAUSE": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_PAUSE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PLAY": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_PLAY",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_RECYCLE": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_RECYCLE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_SP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_SP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_RP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_RP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_LR": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_LR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_ADD_FAVOR": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_ADD_FAVOR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_DEL_FAVOR": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_DEL_FAVOR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.NAVI_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.NAVI_MUTE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.NAVI_EXIT_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.NAVI_EXIT_MUTE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.SHUT_UP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.HOME": {
		// 					"type": "service",
		// 					"message": "tsd.command.HOME",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_POWER_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_POWER_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_POWER_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_POWER_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_FM_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_FM_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_FM_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_FM_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_BIND": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_BIND",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_BIND": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_BIND",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_CAMERA_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_CAMERA_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_CAMERA_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_CAMERA_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_ABOUT": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_ABOUT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_ABOUT": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_ABOUT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_SYS": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_SYS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_SYS": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_SYS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_BT_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_BT_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_BT_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_BT_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_RECORD": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_RECORD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_RECORD": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_RECORD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_ALL": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_ALL",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_ALL": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_ALL",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_ACCIDENT": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_ACCIDENT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_ACCIDENT": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_ACCIDENT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_FAVOR": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_FAVOR",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_FAVOR": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_FAVOR",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MEDIA_ADD_SUB": {
		// 					"type": "service",
		// 					"message": "tsd.command.MEDIA_ADD_SUB",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_DEL_SUB": {
		// 					"type": "service",
		// 					"message": "tsd.command.MEDIA_DEL_SUB",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.ENTER_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.ENTER_MUTE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.EXIT_MUTE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"weather": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "天气",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"position": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "您现在在'value'附近",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"stock": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "股票",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"chat": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "聊天",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"callname": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 9
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				},
		// 				"callnumber": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 7
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "录音出错，小宝先退下了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_recog": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝没听清，请声音大一点",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝刚走神了，请再说一遍吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝没听清，请说的慢一点",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这个问题有意思，请再说一遍吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这个问题有点复杂，请你再说一遍吧",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_support": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "我还不会'value'",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_speech": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "没事的话，小宝先退下啦。",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "既然不说话，先退下啦。",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_not_music_found": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "搜索超时，请重试.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_search_failed": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "搜索失败了，请再试一次吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这次失败了不要紧，再一次就好了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 1,
		// 			"recognizerType": "general",
		// 			"speech": {
		// 				"role": "xbot",
		// 				"content": "已搜到'value'，请选择",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			},
		// 			"onSearch": {
		// 				"#location": {
		// 					"conditionSpeeches": {
		// 						"location_single": {
		// 							"role": "xbot",
		// 							"content": "找到了，请问确认，还是取消",
		// 							"mode": "tts"
		// 						},
		// 						"location_multi": {
		// 							"role": "xbot",
		// 							"content": "找到了, 请问选择第几个，还是需要取消",
		// 							"extra": "\t\t请说\n“选择第N个”",
		// 							"mode": "tts"
		// 						}
		// 					}
		// 				},
		// 				"#music": {
		// 					"conditionSpeeches": {
		// 						"music_single": {
		// 							"role": "xbot",
		// 							"content": "好的，这就为您播放'author''song'",
		// 							"mode": "tts"
		// 						},
		// 						"music_multi": {
		// 							"role": "xbot",
		// 							"content": "找到了, 请问选择第几个，还是需要取消",
		// 							"extra": "\t\t请说\n“选择第N个”",
		// 							"mode": "tts"
		// 						},
		// 						"author": {
		// 							"role": "xbot",
		// 							"content": "好的，这就为您播放'author''song'",
		// 							"mode": "tts"
		// 						},
		// 						"podcast": {
		// 							"role": "xbot",
		// 							"content": "好的，这就为您播放'value'",
		// 							"mode": "tts"
		// 						},
		// 						"news": {
		// 							"role": "xbot",
		// 							"content": "好的，这就为您播放'value'",
		// 							"mode": "tts"
		// 						}
		// 					}
		// 				}
		// 			},
		// 			"onRetry": {
		// 				"#location": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "请问还去'value'吗？请选择或取消",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "还去'value'吗?",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#music": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "请问还听'value'吗？请选择或取消",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "听'value'吗?",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			},
		// 			"onParamMiss": {
		// 				"#location": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"call": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 8
		// 					}
		// 				}
		// 			},
		// 			"onReselect": {
		// 				"#location": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请说选择第几个或者换个关键字",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请继续",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#music": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请说选择第几个或者换个关键字",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请继续",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"callname": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已找到'number'个候选联系人，请选择",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 11
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"correct": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"select": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"autoSelect": {
		// 					"action": "select",
		// 					"speech": {
		// 						"content": "",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"tsd.command.MEDIA_SELECT_ALL": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请稍候",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"tsd.command.POSITIVE": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"select": 0,
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_recog": {
		// 					"action": "jump",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_speech": {
		// 					"action": "select",
		// 					"select": 0,
		// 					"speech": {
		// 						"content": "那小宝帮你选第一个了",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_match_answer_on_push": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_select": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 3
		// 					}
		// 				},
		// 				"err_no_support": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_search_failed": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "搜索失败了，请再试一次吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这次失败了不要紧，再一次就好了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 2,
		// 			"recognizerType": "general",
		// 			"speeches": [{
		// 				"content": "请选择",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			}, {
		// 				"content": "小宝没听懂，请再选一次",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			}, {
		// 				"content": "小宝没听清，请按提示选择",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			}, {
		// 				"content": "请再选一遍吧",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			}],
		// 			"onRetry": {
		// 				"#location": {
		// 					"speech": {
		// 						"role": "xbot",
		// 						"content": "请问还去'value'吗？请选择或取消",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"#music": {
		// 					"speech": {
		// 						"role": "xbot",
		// 						"content": "请问还听'value'吗？请选择或取消",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onReselect": {
		// 				"#location": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请说选择第几个或者换个关键字",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请继续",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#music": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请说选择第几个或者换个关键字",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请继续",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"callname": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已找到'number'个候选联系人，请选择",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 11
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"select": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的，请稍候",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"tsd.command.MEDIA_SELECT_ALL": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请稍候",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"correct": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"tsd.command.POSITIVE": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "那好吧，再见",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_recog": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_speech": {
		// 					"action": "select",
		// 					"select": 0,
		// 					"speech": {
		// 						"content": "那小宝帮你选第一个了",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_match_answer_on_push": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_support": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_select": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 3
		// 					}
		// 				},
		// 				"err_search_failed": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "搜索失败了，请再试一次吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这次失败了不要紧，再一次就好了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 3,
		// 			"recognizerType": "poi",
		// 			"speech": {
		// 				"content": "对不起，小宝没找到这个选项，请重试",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			},
		// 			"onReselect": {
		// 				"#location": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请说选择第几个或者换个关键字",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请继续",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#music": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请说选择第几个或者换个关键字",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请继续",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"select": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的，请稍候",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"tsd.command.POSITIVE": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 3
		// 					}
		// 				},
		// 				"err_recog": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 3
		// 					}
		// 				},
		// 				"err_no_speech": {
		// 					"action": "select",
		// 					"select": 0,
		// 					"speech": {
		// 						"content": "那小宝帮你选第一个了",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_match_answer_on_push": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_select": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 3
		// 					}
		// 				},
		// 				"err_search_failed": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "搜索失败了，请再试一次吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这次失败了不要紧，再一次就好了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 4,
		// 			"recognizerType": "poi",
		// 			"forget": true,
		// 			"onParamMiss": {
		// 				"#location": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"call": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 8
		// 					}
		// 				}
		// 			},
		// 			"onNotReady": {
		// 				"callname": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请先手动打开手机上的蓝牙并连接小宝",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"callnumber": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请先手动打开手机上的蓝牙并连接小宝",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MRD": {
		// 					"type": "service",
		// 					"message": "tsd.command.MRD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_MAP": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_MAP",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MAP": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"tsd.command.OPEN_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_MUSIC",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MUSIC": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"tsd.command.JOKE": {
		// 					"type": "service",
		// 					"message": "tsd.command.JOKE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_WIFI_AP": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_WIFI_AP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_WIFI_AP": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_WIFI_AP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TAKE_PICTURE": {
		// 					"type": "service",
		// 					"message": "tsd.command.TAKE_PICTURE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TURN_OFF_SCREEN": {
		// 					"type": "service",
		// 					"message": "tsd.command.TURN_OFF_SCREEN",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TURN_ON_SCREEN": {
		// 					"type": "service",
		// 					"message": "tsd.command.TURN_ON_SCREEN",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.PLAY_COLLECT_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.PLAY_COLLECT_MUSIC",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_MUSIC",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_JOKE": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_JOKE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_MAP": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_MAP",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_FM": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_FM",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_FM": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_FM",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.OPEN_SETTINGS": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_SETTINGS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_SETTINGS": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_SETTINGS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MEDIA_NEXT": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_NEXT",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PREV": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PREV",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PAUSE": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PAUSE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PLAY": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PLAY",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_RECYCLE": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_RECYCLE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_SP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_SP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_RP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_RP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_LR": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_LR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_ADD_FAVOR": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_ADD_FAVOR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_DEL_FAVOR": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_DEL_FAVOR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.NAVI_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.NAVI_MUTE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.NAVI_EXIT_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.NAVI_EXIT_MUTE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.HOME": {
		// 					"type": "service",
		// 					"message": "tsd.command.HOME",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_POWER_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_POWER_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_POWER_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_POWER_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_FM_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_FM_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_FM_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_FM_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_BIND": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_BIND",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_BIND": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_BIND",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_CAMERA_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_CAMERA_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_CAMERA_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_CAMERA_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_ABOUT": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_ABOUT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_ABOUT": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_ABOUT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_SYS": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_SYS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_SYS": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_SYS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_BT_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_BT_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_BT_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_BT_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_RECORD": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_RECORD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_RECORD": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_RECORD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_ALL": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_ALL",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_ALL": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_ALL",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_ACCIDENT": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_ACCIDENT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_ACCIDENT": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_ACCIDENT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_FAVOR": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_FAVOR",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_FAVOR": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_FAVOR",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MEDIA_ADD_SUB": {
		// 					"type": "service",
		// 					"message": "tsd.command.MEDIA_ADD_SUB",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_DEL_SUB": {
		// 					"type": "service",
		// 					"message": "tsd.command.MEDIA_DEL_SUB",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.ENTER_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.ENTER_MUTE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.EXIT_MUTE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"weather": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "天气",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"position": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "您现在在'value'附近",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"stock": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "股票",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"chat": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "聊天",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"callname": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 9
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				},
		// 				"callnumber": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 7
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "录音出错，小宝先退下了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_support": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "我还不会'value'",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_recog": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝没听清，请声音大一点",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝刚走神了，请再说一遍吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝没听清，请说的慢一点",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这个问题有意思，请再说一遍吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这个问题有点复杂，请你再说一遍吧",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_speech": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "没事的话，小宝先退下啦。",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "既然不说话，先退下啦。",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_not_music_found": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "搜索超时，请重试.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_search_failed": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "搜索失败了，请再试一次吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这次失败了不要紧，再一次就好了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 5,
		// 			"recognizerType": "song",
		// 			"forget": true,
		// 			"speech": {
		// 				"content": "请问您要听什么？",
		// 				"mode": "tts"
		// 			},
		// 			"onParamMiss": {
		// 				"#location": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"call": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 8
		// 					}
		// 				}
		// 			},
		// 			"onNotReady": {
		// 				"callname": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请先手动打开手机上的蓝牙并连接小宝",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.RD": {
		// 					"type": "service",
		// 					"message": "tsd.command.MRD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MRD": {
		// 					"type": "service",
		// 					"message": "tsd.command.MRD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_MAP": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_MAP",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MAP": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"tsd.command.OPEN_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_MUSIC",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MUSIC": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"tsd.command.JOKE": {
		// 					"type": "service",
		// 					"message": "tsd.command.JOKE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_WIFI_AP": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_WIFI_AP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_WIFI_AP": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_WIFI_AP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TAKE_PICTURE": {
		// 					"type": "service",
		// 					"message": "tsd.command.TAKE_PICTURE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TURN_OFF_SCREEN": {
		// 					"type": "service",
		// 					"message": "tsd.command.TURN_OFF_SCREEN",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TURN_ON_SCREEN": {
		// 					"type": "service",
		// 					"message": "tsd.command.TURN_ON_SCREEN",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.PLAY_COLLECT_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.PLAY_COLLECT_MUSIC",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_MUSIC",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_JOKE": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_JOKE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_MAP": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_MAP",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_FM": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_FM",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_FM": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_FM",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.OPEN_SETTINGS": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_SETTINGS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_SETTINGS": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_SETTINGS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MEDIA_NEXT": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_NEXT",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PREV": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PREV",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PAUSE": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PAUSE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PLAY": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PLAY",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_RECYCLE": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_RECYCLE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_SP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_SP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_RP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_RP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_LR": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_LR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_ADD_FAVOR": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_ADD_FAVOR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_DEL_FAVOR": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_DEL_FAVOR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.NAVI_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.NAVI_MUTE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.NAVI_EXIT_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.NAVI_EXIT_MUTE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.HOME": {
		// 					"type": "service",
		// 					"message": "tsd.command.HOME",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_POWER_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_POWER_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_POWER_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_POWER_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_FM_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_FM_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_FM_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_FM_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_BIND": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_BIND",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_BIND": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_BIND",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_CAMERA_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_CAMERA_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_CAMERA_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_CAMERA_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_ABOUT": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_ABOUT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_ABOUT": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_ABOUT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_SYS": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_SYS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_SYS": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_SYS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_BT_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_BT_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_BT_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_BT_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_RECORD": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_RECORD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_RECORD": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_RECORD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_ALL": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_ALL",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_ALL": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_ALL",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_ACCIDENT": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_ACCIDENT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_ACCIDENT": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_ACCIDENT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_FAVOR": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_FAVOR",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_FAVOR": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_FAVOR",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MEDIA_ADD_SUB": {
		// 					"type": "service",
		// 					"message": "tsd.command.MEDIA_ADD_SUB",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_DEL_SUB": {
		// 					"type": "service",
		// 					"message": "tsd.command.MEDIA_DEL_SUB",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.ENTER_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.ENTER_MUTE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.EXIT_MUTE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"weather": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "天气",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"position": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "您现在在'value'附近",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"stock": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "股票",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"chat": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "聊天",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"callname": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 9
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				},
		// 				"callnumber": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 7
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "录音出错，小宝先退下了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_recog": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 16
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝没听清，请声音大一点",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝刚走神了，请再说一遍吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝没听清，请说的慢一点",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这个问题有意思，请再说一遍吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这个问题有点复杂，请你再说一遍吧",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_speech": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "没事的话，小宝先退下啦。",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "既然不说话，先退下啦。",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_not_music_found": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "搜索超时，请重试.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_support": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "我还不会'value'",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_search_failed": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "搜索失败了，请再试一次吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这次失败了不要紧，再一次就好了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 6,
		// 			"recognizerType": "poi",
		// 			"forget": true,
		// 			"speech": {
		// 				"content": "请问您要去哪儿？",
		// 				"mode": "tts"
		// 			},
		// 			"onParamMiss": {
		// 				"#location": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"call": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 8
		// 					}
		// 				}
		// 			},
		// 			"onNotReady": {
		// 				"callname": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请先手动打开手机上的蓝牙并连接小宝",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_MAP": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_MAP",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MAP": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"tsd.command.OPEN_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_MUSIC",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MUSIC": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"tsd.command.JOKE": {
		// 					"type": "service",
		// 					"message": "tsd.command.JOKE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_WIFI_AP": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_WIFI_AP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_WIFI_AP": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_WIFI_AP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TAKE_PICTURE": {
		// 					"type": "service",
		// 					"message": "tsd.command.TAKE_PICTURE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TURN_OFF_SCREEN": {
		// 					"type": "service",
		// 					"message": "tsd.command.TURN_OFF_SCREEN",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TURN_ON_SCREEN": {
		// 					"type": "service",
		// 					"message": "tsd.command.TURN_ON_SCREEN",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.PLAY_COLLECT_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.PLAY_COLLECT_MUSIC",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_MUSIC",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_JOKE": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_JOKE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_MAP": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_MAP",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_FM": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_FM",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_FM": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_FM",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.OPEN_SETTINGS": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_SETTINGS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_SETTINGS": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_SETTINGS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MEDIA_NEXT": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_NEXT",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PREV": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PREV",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PAUSE": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PAUSE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PLAY": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PLAY",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_RECYCLE": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_RECYCLE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_SP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_SP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_RP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_RP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_LR": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_LR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_ADD_FAVOR": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_ADD_FAVOR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_DEL_FAVOR": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_DEL_FAVOR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.NAVI_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.NAVI_MUTE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.NAVI_EXIT_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.NAVI_EXIT_MUTE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.HOME": {
		// 					"type": "service",
		// 					"message": "tsd.command.HOME",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_POWER_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_POWER_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_POWER_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_POWER_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_FM_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_FM_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_FM_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_FM_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_BIND": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_BIND",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_BIND": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_BIND",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_CAMERA_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_CAMERA_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_CAMERA_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_CAMERA_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_ABOUT": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_ABOUT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_ABOUT": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_ABOUT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_SYS": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_SYS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_SYS": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_SYS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_BT_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_BT_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_BT_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_BT_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_RECORD": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_RECORD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_RECORD": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_RECORD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_ALL": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_ALL",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_ALL": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_ALL",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_ACCIDENT": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_ACCIDENT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_ACCIDENT": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_ACCIDENT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_FAVOR": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_FAVOR",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_FAVOR": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_FAVOR",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MEDIA_ADD_SUB": {
		// 					"type": "service",
		// 					"message": "tsd.command.MEDIA_ADD_SUB",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_DEL_SUB": {
		// 					"type": "service",
		// 					"message": "tsd.command.MEDIA_DEL_SUB",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.ENTER_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.ENTER_MUTE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.EXIT_MUTE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"weather": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "天气",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"position": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "您现在在'value'附近",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"stock": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "股票",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"chat": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "聊天",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"callname": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 9
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				},
		// 				"callnumber": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 7
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "录音出错，小宝先退下了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_recog": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝没听清，请声音大一点",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝刚走神了，请再说一遍吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝没听清，请说的慢一点",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这个问题有意思，请再说一遍吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这个问题有点复杂，请你再说一遍吧",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_speech": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "没事的话，小宝先退下啦。",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "既然不说话，先退下啦。",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_not_music_found": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "搜索超时，请重试.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_support": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "我还不会'value'",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_search_failed": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "搜索失败了，请再试一次吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这次失败了不要紧，再一次就好了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 7,
		// 			"recognizerType": "general",
		// 			"forget": true,
		// 			"speech": {
		// 				"content": "您要拨打的号码是'value'，请确认或取消",
		// 				"mode": "tts"
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 7
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"callnumber": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 7
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				},
		// 				"tsd.command.POSITIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "即将为您拨号",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "录音出错，小宝先退下了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_recog": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 7
		// 					}
		// 				},
		// 				"err_no_speech": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "即将为您拨号",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_support": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 7
		// 					}
		// 				},
		// 				"err_user_cancelled": {
		// 					"action": "return",
		// 					"message": "tsd.command.CALL"
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"message": "tsd.command.CALL",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"message": "tsd.command.CALL",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"message": "tsd.command.NEGATIVE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "那好吧，再见啦",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 8,
		// 			"recognizerType": "general",
		// 			"forget": true,
		// 			"speech": {
		// 				"content": "请说给某某打电话或者拨号10000",
		// 				"mode": "tts"
		// 			},
		// 			"onParamMiss": {
		// 				"#location": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"call": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 8
		// 					}
		// 				}
		// 			},
		// 			"onNotReady": {
		// 				"callname": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请先手动打开手机上的蓝牙并连接小宝",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"callnumber": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请先手动打开手机上的蓝牙并连接小宝",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 8
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_MAP": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_MAP",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MAP": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"tsd.command.OPEN_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_MUSIC",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MUSIC": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"tsd.command.JOKE": {
		// 					"type": "service",
		// 					"message": "tsd.command.JOKE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_WIFI_AP": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_WIFI_AP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_WIFI_AP": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_WIFI_AP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TAKE_PICTURE": {
		// 					"type": "service",
		// 					"message": "tsd.command.TAKE_PICTURE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TURN_OFF_SCREEN": {
		// 					"type": "service",
		// 					"message": "tsd.command.TURN_OFF_SCREEN",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TURN_ON_SCREEN": {
		// 					"type": "service",
		// 					"message": "tsd.command.TURN_ON_SCREEN",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.PLAY_COLLECT_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.PLAY_COLLECT_MUSIC",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_MUSIC",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_JOKE": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_JOKE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_MAP": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_MAP",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_FM": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_FM",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_FM": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_FM",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.OPEN_SETTINGS": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_SETTINGS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_SETTINGS": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_SETTINGS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MEDIA_NEXT": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_NEXT",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PREV": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PREV",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PAUSE": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PAUSE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PLAY": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PLAY",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_RECYCLE": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_RECYCLE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_SP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_SP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_RP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_RP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_LR": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_LR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_ADD_FAVOR": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_ADD_FAVOR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_DEL_FAVOR": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_DEL_FAVOR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.NAVI_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.NAVI_MUTE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.NAVI_EXIT_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.NAVI_EXIT_MUTE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.HOME": {
		// 					"type": "service",
		// 					"message": "tsd.command.HOME",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_POWER_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_POWER_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_POWER_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_POWER_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_FM_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_FM_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_FM_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_FM_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_BIND": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_BIND",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_BIND": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_BIND",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_CAMERA_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_CAMERA_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_CAMERA_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_CAMERA_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_ABOUT": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_ABOUT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_ABOUT": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_ABOUT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_SYS": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_SYS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_SYS": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_SYS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_BT_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_BT_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_BT_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_BT_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_RECORD": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_RECORD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_RECORD": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_RECORD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_ALL": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_ALL",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_ALL": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_ALL",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_ACCIDENT": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_ACCIDENT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_ACCIDENT": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_ACCIDENT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_FAVOR": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_FAVOR",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_FAVOR": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_FAVOR",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MEDIA_ADD_SUB": {
		// 					"type": "service",
		// 					"message": "tsd.command.MEDIA_ADD_SUB",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_DEL_SUB": {
		// 					"type": "service",
		// 					"message": "tsd.command.MEDIA_DEL_SUB",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.ENTER_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.ENTER_MUTE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.EXIT_MUTE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"weather": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "天气",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"position": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "您现在在'value'附近",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"stock": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "股票",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"chat": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "聊天",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"callname": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 9
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				},
		// 				"callnumber": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 7
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "录音出错，小宝先退下了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_recog": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝没听清，请声音大一点",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝刚走神了，请再说一遍吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝没听清，请说的慢一点",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这个问题有意思，请再说一遍吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这个问题有点复杂，请你再说一遍吧",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_speech": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "没事的话，小宝先退下啦。",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "既然不说话，先退下啦。",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_not_music_found": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "搜索超时，请重试.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_support": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "我还不会'value'",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_search_failed": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "搜索失败了，请再试一次吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这次失败了不要紧，再一次就好了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 9,
		// 			"recognizerType": "general",
		// 			"onSearch": {
		// 				"callname": {
		// 					"conditionSpeeches": {
		// 						"callname_single": {
		// 							"role": "xbot",
		// 							"content": "",
		// 							"mode": "tts"
		// 						},
		// 						"callname_multi": {
		// 							"role": "xbot",
		// 							"content": "已找到'number'个候选联系人，请选择",
		// 							"extra": "\t\t请说\n“选择第N个”",
		// 							"mode": "tts"
		// 						}
		// 					}
		// 				}
		// 			},
		// 			"onParamMiss": {
		// 				"call": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 8
		// 					}
		// 				}
		// 			},
		// 			"onReselect": {
		// 				"callname": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已找到'number'个候选联系人，请选择",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 9
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"select": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"autoSelect": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 10
		// 					},
		// 					"speech": {
		// 						"content": "",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"tsd.command.MEDIA_SELECT_ALL": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请稍候",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"select": 0,
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_recog": {
		// 					"action": "jump",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_speech": {
		// 					"action": "select",
		// 					"select": 0,
		// 					"speech": {
		// 						"content": "那小宝帮你选第一个了",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_match_answer_on_push": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_select": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 3
		// 					}
		// 				},
		// 				"err_no_support": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_search_failed": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "搜索失败了，请再试一次吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这次失败了不要紧，再一次就好了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 10,
		// 			"recognizerType": "general",
		// 			"forget": true,
		// 			"speech": {
		// 				"content": "找到'value'的电话了，是否立即拨打",
		// 				"mode": "tts"
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 10
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"callname": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 9
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				},
		// 				"tsd.command.POSITIVE": {
		// 					"action": "select",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "即将为您拨号",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.POSITIVE_CALL": {
		// 					"action": "select",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "即将为您拨号",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"select": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "即将为您拨号",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"message": "tsd.command.CALL",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "return",
		// 					"message": "tsd.command.CALL",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "录音出错，小宝先退下了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_recog": {
		// 					"action": "return",
		// 					"message": "tsd.command.CALL",
		// 					"speech": {
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 10
		// 					}
		// 				},
		// 				"err_no_speech": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "即将为您拨号",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_support": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 10
		// 					}
		// 				},
		// 				"err_user_cancelled": {
		// 					"action": "return",
		// 					"message": "tsd.command.CALL"
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"message": "tsd.command.CALL",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"message": "tsd.command.CALL",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"message": "tsd.command.NEGATIVE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "那好吧，再见啦",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 11,
		// 			"recognizerType": "general",
		// 			"speech": {
		// 				"role": "xbot",
		// 				"content": "快选择吧",
		// 				"extra": "\t\t请说\n“选择第N个”",
		// 				"mode": "tts"
		// 			},
		// 			"onRetry": {
		// 				"#location": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "请问还去'value'吗？请选择或取消",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "还去'value'吗?",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#music": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "请问还听'value'吗？请选择或取消",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "听'value'吗?",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			},
		// 			"onParamMiss": {
		// 				"#location": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"call": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 8
		// 					}
		// 				}
		// 			},
		// 			"onReselect": {
		// 				"#location": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请说选择第几个或者换个关键字",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请继续",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#music": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请说选择第几个或者换个关键字",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "已筛选出'number'条，请继续",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"callname": {
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "已找到'number'个候选联系人，请选择",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 11
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"correct": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"select": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"autoSelect": {
		// 					"action": "select",
		// 					"speech": {
		// 						"content": "",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"tsd.command.MEDIA_SELECT_ALL": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请稍候",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"select": 0,
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_recog": {
		// 					"action": "jump",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_speech": {
		// 					"action": "select",
		// 					"select": 0,
		// 					"speech": {
		// 						"content": "那小宝帮你选第一个了",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_no_match_answer_on_push": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_no_match_select": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 3
		// 					}
		// 				},
		// 				"err_no_support": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 2
		// 					}
		// 				},
		// 				"err_search_failed": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "搜索失败了，请再试一次吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这次失败了不要紧，再一次就好了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}, {
		// 			"id": 12,
		// 			"recognizerType": "poi",
		// 			"forget": true,
		// 			"onParamMiss": {
		// 				"#location": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"call": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 8
		// 					}
		// 				}
		// 			},
		// 			"onNotReady": {
		// 				"callname": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请先手动打开手机上的蓝牙并连接小宝",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"callnumber": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "请先手动打开手机上的蓝牙并连接小宝",
		// 						"mode": "tts"
		// 					}
		// 				}
		// 			},
		// 			"onSuccess": {
		// 				"tsd.command.WK": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝在听呢",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MRD": {
		// 					"type": "service",
		// 					"message": "tsd.command.MRD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MD": {
		// 					"type": "service",
		// 					"message": "tsd.command.MRD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_MAP": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_MAP",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MAP": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 6
		// 					}
		// 				},
		// 				"tsd.command.OPEN_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_MUSIC",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MUSIC": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 5
		// 					}
		// 				},
		// 				"tsd.command.JOKE": {
		// 					"type": "service",
		// 					"message": "tsd.command.JOKE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_WIFI_AP": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_WIFI_AP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_WIFI_AP": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_WIFI_AP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TAKE_PICTURE": {
		// 					"type": "service",
		// 					"message": "tsd.command.TAKE_PICTURE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TURN_OFF_SCREEN": {
		// 					"type": "service",
		// 					"message": "tsd.command.TURN_OFF_SCREEN",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.TURN_ON_SCREEN": {
		// 					"type": "service",
		// 					"message": "tsd.command.TURN_ON_SCREEN",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.PLAY_COLLECT_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.PLAY_COLLECT_MUSIC",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_MUSIC": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_MUSIC",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_JOKE": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_JOKE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_MAP": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_MAP",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_FM": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_FM",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.CLOSE_FM": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_FM",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.OPEN_SETTINGS": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_SETTINGS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_SETTINGS": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_SETTINGS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MEDIA_NEXT": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_NEXT",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PREV": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PREV",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PAUSE": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PAUSE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_PLAY": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_PLAY",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_RECYCLE": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_RECYCLE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_SP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_SP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_RP": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_RP",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_LR": {
		// 					"type": "broadcast",
		// 					"message": "tsd.command.MEDIA_LR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_ADD_FAVOR": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_ADD_FAVOR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_DEL_FAVOR": {
		// 					"type": "podcast",
		// 					"message": "tsd.command.MEDIA_DEL_FAVOR",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.NAVI_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.NAVI_MUTE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.NAVI_EXIT_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.NAVI_EXIT_MUTE",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.HOME": {
		// 					"type": "service",
		// 					"message": "tsd.command.HOME",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_POWER_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_POWER_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_POWER_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_POWER_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_FM_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_FM_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_FM_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_FM_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_BIND": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_BIND",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_BIND": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_BIND",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_CAMERA_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_CAMERA_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_CAMERA_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_CAMERA_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_ABOUT": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_ABOUT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_ABOUT": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_ABOUT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_SYS": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_SYS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_SYS": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_SYS",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_BT_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_BT_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_BT_SET": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_BT_SET",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_RECORD": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_RECORD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_RECORD": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_RECORD",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_ALL": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_ALL",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_ALL": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_ALL",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_ACCIDENT": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_ACCIDENT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_ACCIDENT": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_ACCIDENT",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.OPEN_DRIV_FAVOR": {
		// 					"type": "service",
		// 					"message": "tsd.command.OPEN_DRIV_FAVOR",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.CLOSE_DRIV_FAVOR": {
		// 					"type": "service",
		// 					"message": "tsd.command.CLOSE_DRIV_FAVOR",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.MEDIA_ADD_SUB": {
		// 					"type": "service",
		// 					"message": "tsd.command.MEDIA_ADD_SUB",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.MEDIA_DEL_SUB": {
		// 					"type": "service",
		// 					"message": "tsd.command.MEDIA_DEL_SUB",
		// 					"action": "return"
		// 				},
		// 				"tsd.command.ENTER_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.ENTER_MUTE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT_MUTE": {
		// 					"type": "service",
		// 					"message": "tsd.command.EXIT_MUTE",
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"#location": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"#music": {
		// 					"action": "search",
		// 					"next": {
		// 						"did": 1
		// 					}
		// 				},
		// 				"weather": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "天气",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"position": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "您现在在'value'附近",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"stock": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "股票",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"chat": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "聊天",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"callname": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 9
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				},
		// 				"callnumber": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 7
		// 					},
		// 					"message": "tsd.command.CALL"
		// 				}
		// 			},
		// 			"onFailed": {
		// 				"err_net": {
		// 					"action": "return",
		// 					"speech": {
		// 						"content": "当前网络不给力，请稍后再试一遍吧.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_record": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "录音出错，小宝先退下了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_support": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "我还不会'value'",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_recog": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "识别联网错误，请检查网络",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_match_answer": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "小宝没听清，请声音大一点",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝刚走神了，请再说一遍吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝没听清，请说的慢一点",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这个问题有意思，请再说一遍吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这个问题有点复杂，请你再说一遍吧",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_no_speech": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "没事的话，小宝先退下啦。",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "既然不说话，先退下啦。",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"err_not_music_found": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speech": {
		// 						"content": "搜索超时，请重试.",
		// 						"mode": "tts"
		// 					}
		// 				},
		// 				"err_search_failed": {
		// 					"action": "jump",
		// 					"next": {
		// 						"did": 4
		// 					},
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "搜索失败了，请再试一次吧",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "这次失败了不要紧，再一次就好了",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.SHUT_UP": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.EXIT": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				},
		// 				"tsd.command.NEGATIVE": {
		// 					"action": "return",
		// 					"speeches": [{
		// 						"role": "xbot",
		// 						"content": "好的，小宝退下啦",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "好的，有事记得叫我",
		// 						"mode": "tts"
		// 					}, {
		// 						"role": "xbot",
		// 						"content": "小宝遵命",
		// 						"mode": "tts"
		// 					}]
		// 				}
		// 			}
		// 		}]
		// 	}]
		// })
	},
	"Y29tLnR1eW91LnRzZC5jb2xsZWN0b3I=": {
		"mode": "time",
		"frequency": "15",
		// "type": JSON.stringify([
		// 	"all"
		// ]),
		"expiry": "86400000",
		"compress": "base64"
	}
};

export const config = getDefPram() || _config;

async function getDefPram() {
	let data = await groupPram('get', {
		group: 'xiaobao'
	})
	if (data.code === 0) {
		return data.data
	} else {
		return
	}
};


export const dataline = [{ "_id": "5a7907176fc8f960afea34f2", "imei": "354008079855669", "time": "2018-02-06 09:35:00", "timeUnix": "1517880900901", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.422857, "addr": "上海市徐汇区内环高架路2162号靠近科技成果档案资料馆", "latitude": 31.186975, "speed": 0, "direction": 0, "city": "上海市" }, "updatedTime": "2018-02-06 09:38:28", "updatedTimeUnix": "1517881108996" }, { "_id": "5a7907176fc8f960afea34f3", "imei": "354008079855669", "time": "2018-02-06 09:35:01", "timeUnix": "1517880901633", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.4226136610243, "addr": "上海市徐汇区内环高架路2162号靠近科技成果档案资料馆", "latitude": 31.1885205078125, "speed": 0, "direction": 0, "city": "上海市" }, "updatedTime": "2018-02-06 09:38:28", "updatedTimeUnix": "1517881108997" }, { "_id": "5a7907176fc8f960afea34f5", "imei": "354008079855669", "time": "2018-02-06 09:35:12", "timeUnix": "1517880912051", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42271240234375, "addr": "上海市徐汇区中山西路靠近西区车站", "latitude": 31.188204210069443, "speed": 0, "direction": 0, "city": "上海市" }, "updatedTime": "2018-02-06 09:38:28", "updatedTimeUnix": "1517881108997" }, { "_id": "5a7907176fc8f960afea34fe", "imei": "354008079855669", "time": "2018-02-06 09:35:41", "timeUnix": "1517880941948", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42273274739583, "addr": "上海市徐汇区中山西路靠近西区车站", "latitude": 31.188140190972224, "speed": 0, "direction": 0, "city": "上海市" }, "updatedTime": "2018-02-06 09:38:28", "updatedTimeUnix": "1517881108997" }, { "_id": "5a79072b6fc8f960afea3536", "imei": "354008079855669", "time": "2018-02-06 09:38:11", "timeUnix": "1517881091975", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42276068793403, "addr": "上海市徐汇区中山西路靠近西区车站", "latitude": 31.188120930989584, "speed": 0, "direction": 0, "city": "上海市" }, "updatedTime": "2018-02-06 09:38:48", "updatedTimeUnix": "1517881128917" }, { "_id": "5a79073a6fc8f960afea3551", "imei": "354008079855669", "time": "2018-02-06 09:38:52", "timeUnix": "1517881132034", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42272732204862, "addr": "上海市徐汇区中山西路靠近西区车站", "latitude": 31.188143174913193, "speed": 1.04, "direction": 311.89, "city": "上海市" }, "updatedTime": "2018-02-06 09:39:02", "updatedTimeUnix": "1517881142428" }, { "_id": "5a79073a6fc8f960afea3556", "imei": "354008079855669", "time": "2018-02-06 09:39:01", "timeUnix": "1517881141972", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42271240234375, "addr": "上海市徐汇区中山西路靠近西区车站", "latitude": 31.188343098958335, "speed": 3.93, "direction": 39.4, "city": "上海市" }, "updatedTime": "2018-02-06 09:39:02", "updatedTimeUnix": "1517881142429" }, { "_id": "5a79074e6fc8f960afea3572", "imei": "354008079855669", "time": "2018-02-06 09:39:12", "timeUnix": "1517881152041", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42301161024305, "addr": "上海市徐汇区中山西路靠近西区车站", "latitude": 31.188627115885417, "speed": 3.66, "direction": 46.9, "city": "上海市" }, "updatedTime": "2018-02-06 09:39:22", "updatedTimeUnix": "1517881162236" }, { "_id": "5a79074e6fc8f960afea3577", "imei": "354008079855669", "time": "2018-02-06 09:39:21", "timeUnix": "1517881161979", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.4232351345486, "addr": "上海市徐汇区中山西路靠近西区车站", "latitude": 31.188776312934028, "speed": 1.34, "direction": 53.09, "city": "上海市" }, "updatedTime": "2018-02-06 09:39:22", "updatedTimeUnix": "1517881162236" }, { "_id": "5a7907626fc8f960afea3591", "imei": "354008079855669", "time": "2018-02-06 09:39:32", "timeUnix": "1517881172000", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42333821614584, "addr": "上海市徐汇区中山西路靠近西区车站", "latitude": 31.188811848958334, "speed": 0.95, "direction": 57.4, "city": "上海市" }, "updatedTime": "2018-02-06 09:39:42", "updatedTimeUnix": "1517881182259" }, { "_id": "5a7907626fc8f960afea3596", "imei": "354008079855669", "time": "2018-02-06 09:39:41", "timeUnix": "1517881181994", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.4234361436632, "addr": "上海市徐汇区古宜路靠近西区车站", "latitude": 31.18863226996528, "speed": 2.84, "direction": 189.89, "city": "上海市" }, "updatedTime": "2018-02-06 09:39:42", "updatedTimeUnix": "1517881182259" }, { "_id": "5a79077b6fc8f960afea35b8", "imei": "354008079855669", "time": "2018-02-06 09:39:51", "timeUnix": "1517881191994", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42342800564236, "addr": "上海市徐汇区古宜路靠近西区车站", "latitude": 31.188428276909722, "speed": 1.16, "direction": 182.5, "city": "上海市" }, "updatedTime": "2018-02-06 09:40:09", "updatedTimeUnix": "1517881209261" }, { "_id": "5a79078f6fc8f960afea35df", "imei": "354008079855669", "time": "2018-02-06 09:40:14", "timeUnix": "1517881214975", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42344075520833, "addr": "上海市徐汇区古宜路靠近西区车站", "latitude": 31.188310818142362, "speed": 0, "direction": 0, "city": "上海市" }, "updatedTime": "2018-02-06 09:40:29", "updatedTimeUnix": "1517881229308" }, { "_id": "5a7908a76fc8f960afea3794", "imei": "354008079855669", "time": "2018-02-06 09:44:54", "timeUnix": "1517881494982", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42347276475695, "addr": "上海市徐汇区古宜路靠近西区车站", "latitude": 31.188340657552082, "speed": 0.79, "direction": 253.89, "city": "上海市" }, "updatedTime": "2018-02-06 09:45:10", "updatedTimeUnix": "1517881510400" }, { "_id": "5a79091f6fc8f960afea385e", "imei": "354008079855669", "time": "2018-02-06 09:47:04", "timeUnix": "1517881624975", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42365505642361, "addr": "上海市徐汇区古宜路靠近西区车站", "latitude": 31.188378363715277, "speed": 0.99, "direction": 91.3, "city": "上海市" }, "updatedTime": "2018-02-06 09:47:10", "updatedTimeUnix": "1517881630937" }, { "_id": "5a7909336fc8f960afea3879", "imei": "354008079855669", "time": "2018-02-06 09:47:15", "timeUnix": "1517881635066", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.4238490125868, "addr": "上海市徐汇区古宜路靠近西区车站", "latitude": 31.188174641927084, "speed": 3.83, "direction": 153.19, "city": "上海市" }, "updatedTime": "2018-02-06 09:47:31", "updatedTimeUnix": "1517881651030" }, { "_id": "5a7909336fc8f960afea3882", "imei": "354008079855669", "time": "2018-02-06 09:47:25", "timeUnix": "1517881645118", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42403917100694, "addr": "上海市徐汇区古宜路靠近西岸创意园", "latitude": 31.187870279947916, "speed": 4.4, "direction": 149.1, "city": "上海市" }, "updatedTime": "2018-02-06 09:47:31", "updatedTimeUnix": "1517881651030" }, { "_id": "5a7909476fc8f960afea3895", "imei": "354008079855669", "time": "2018-02-06 09:47:35", "timeUnix": "1517881655110", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42426432291667, "addr": "上海市徐汇区古宜路靠近西岸创意园", "latitude": 31.187547743055557, "speed": 1.98, "direction": 141.19, "city": "上海市" }, "updatedTime": "2018-02-06 09:47:50", "updatedTimeUnix": "1517881670777" }, { "_id": "5a7909476fc8f960afea38a0", "imei": "354008079855669", "time": "2018-02-06 09:47:45", "timeUnix": "1517881665046", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.424072265625, "addr": "上海市徐汇区古宜路靠近西岸创意园", "latitude": 31.187403428819444, "speed": 4.1, "direction": 234.3, "city": "上海市" }, "updatedTime": "2018-02-06 09:47:50", "updatedTimeUnix": "1517881670778" }, { "_id": "5a7909566fc8f960afea38af", "imei": "354008079855669", "time": "2018-02-06 09:47:55", "timeUnix": "1517881675129", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42362955729166, "addr": "上海市徐汇区徐虹中路靠近技贸宾馆", "latitude": 31.187230360243056, "speed": 5.53, "direction": 237.5, "city": "上海市" }, "updatedTime": "2018-02-06 09:48:05", "updatedTimeUnix": "1517881685573" }, { "_id": "5a7909566fc8f960afea38b4", "imei": "354008079855669", "time": "2018-02-06 09:48:05", "timeUnix": "1517881685086", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42341281467014, "addr": "上海市徐汇区徐虹中路靠近技贸宾馆", "latitude": 31.18711371527778, "speed": 0, "direction": 0, "city": "上海市" }, "updatedTime": "2018-02-06 09:48:05", "updatedTimeUnix": "1517881685573" }, { "_id": "5a7909e26fc8f960afea398a", "imei": "354008079855669", "time": "2018-02-06 09:50:14", "timeUnix": "1517881814992", "event": "geographicInfo", "type": "geographic", "properties": { "province": "上海市", "longitude": 121.42324490017361, "addr": "上海市徐汇区徐虹中路靠近技贸宾馆", "latitude": 31.18703884548611, "speed": 2.29, "direction": 238.39, "city": "上海市" }, "updatedTime": "2018-02-06 09:50:25", "updatedTimeUnix": "1517881825364" }]