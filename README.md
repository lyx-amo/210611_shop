```
const service = axios.create({  //service不是axios的实例,只是为了让它能够使用点方法调用axios的方法
    baseURL: 'xxx',
    timeout: 2000
})

//请求拦截器
service.interceptors.request.use(config => {
    return config
})

//响应拦截器

service.interceptors.response.use(response => {
    Nprogress.start()
    return response.data  //返回响应的数据,为下一个promise的值
}, err => {
    throw err//抛出错误
    // return Promise.reject(err)
})


service.get('/xxx').then(result => {
    Nprogress.done()
    console.log(result);
}).catch(err => {
    Nprogress.done()
    //处理错误提示之外的事情
})

//get的内部流程  axios发送请求的流程
Promise.resolve(config)

    .then((config) => { //请求拦截器
        return config
    })

    .then(config => {//发送异步ajax请求
        return new Promise((resolve, reject) => {
            // 根据config发送ajax请求
            //成功了创建response对象
            resolve(response)
            //失败了创建error对象
            reject(error)
        })
    })

    .then(
    response => {//响应拦截器成功的回调
        return response.data
    },
     error => {//响应拦截器failed的回调
        throw error
    })


    //通过service发送请求
    service.get('/xxx').then(result=>{//result接收到的是响应拦截器成功的结果

    },err=>{//err接收到响应拦截器失败回调抛出的错误error

    })
```