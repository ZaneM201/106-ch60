//this is my API to get connected
const API = {
    baseURL: "https://reqres.in/api",
    //where we want to be connected
    async getTask(){
        const r=await fetch(`${this.baseURL}/users?page=2`);
        if(!r.ok) throw new Error(`Get Failed: ${r.status}`);
        const data = await r.json();

        return data.data.map(u => ({
            title:`${u,first_name} ${last_name}`,
            description: u.email,
            color:"#4d0000",
            startDate: new Date().toISOString().slice(0-16),
            status:"New",
            budget:0
        }));
        
    },

    async createTask(task){
        const r = await fetch(`${this.baseURL}/users`,{
            method: "POST",
            headers: {"Content-Type":"application/json" },
            body: JSON.stringify(task),
        });
        if(!r.ok) throw new Error(`POST Failed: ${r.status}`);
        return r.json();
    },
};
export default API;