const base = {
    get() {
        return {
            url : "http://localhost:8080/shequbangfuduixiangguanli/",
            name: "shequbangfuduixiangguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shequbangfuduixiangguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区帮扶对象管理系统"
        } 
    }
}
export default base
