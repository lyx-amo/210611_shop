import Mock from 'mockjs'
import floors from './floors.json'
import recommends from './recommends.json'
import rank from './rank.json'
import like from './like.json'



Mock.mock('/mock/floors',{code:200,data:floors})
Mock.mock('/mock/recommends',{code:200,data:recommends})
Mock.mock('/mock/rank',{code:200,data:rank})
Mock.mock('/mock/like',{code:200,data:like})
