const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"指导教师管理",
			            "menuJump":"列表",
			            "tableName":"jiaoshi"
			        }
			    ],
			    "menu":"指导教师管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"学生管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"学生管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核",
                            "删除"
                        ],
                        "menu":"项目申报管理",
                        "menuJump":"列表",
                        "tableName":"xiangmu"
                    }
                ],
                "menu":"项目申报管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "删除"
			            ],
			            "menu":"选题审核管理",
			            "menuJump":"列表",
			            "tableName":"xuantishenhe"
			        }
			    ],
			    "menu":"选题审核管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"项目进度管理",
                        "menuJump":"列表",
                        "tableName":"xiangmujindu"
                    }
                ],
                "menu":"项目进度管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"公告类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryNews"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"项目类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryXiangmu"
			        }
			    ],
			    "menu":"基础数据管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"公告信息管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"公告信息管理"
			}
            /*,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"数据备份",
			            "menuJump":"列表",
			            "tableName":"beifen"
			        },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"数据还原",
					    "menuJump":"列表",
					    "tableName":"huanyuan"
					}
			    ],
			    "menu":"数据库管理"
			}*/
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"学生管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"学生管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
			                "新增",
			                "修改",
	                        "删除"
	                    ],
	                    "menu":"项目申报管理",
	                    "menuJump":"列表",
	                    "tableName":"xiangmu"
	                }
	            ],
	            "menu":"项目申报管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "审核",
			            ],
			            "menu":"选题审核管理",
			            "menuJump":"列表",
			            "tableName":"xuantishenhe"
			        }
			    ],
			    "menu":"选题审核管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "审核",
	                    ],
	                    "menu":"项目进度管理",
	                    "menuJump":"列表",
	                    "tableName":"xiangmujindu"
	                }
	            ],
	            "menu":"项目进度管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			            ],
			            "menu":"公告信息管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"公告信息管理"
			}
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"指导教师",
	    "tableName":"jiaoshi"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "申请",
	                    ],
	                    "menu":"项目申报管理",
	                    "menuJump":"列表",
	                    "tableName":"xiangmu"
	                }
	            ],
	            "menu":"项目申报管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "项目",
			                "删除"
			            ],
			            "menu":"选题审核管理",
			            "menuJump":"列表",
			            "tableName":"xuantishenhe"
			        }
			    ],
			    "menu":"选题审核管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "删除"
	                    ],
	                    "menu":"项目进度管理",
	                    "menuJump":"列表",
	                    "tableName":"xiangmujindu"
	                }
	            ],
	            "menu":"项目进度管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"公告信息管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"公告信息管理"
			}
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"学生",
	    "tableName":"yonghu"
	}
	
]
    }
}
export default menu;
