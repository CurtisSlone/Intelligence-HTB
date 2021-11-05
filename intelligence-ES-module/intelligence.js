import fetch from "node-fetch";
import { createWriteStream } from "fs";
import path from "path"

const args = process.argv
const year = args[2].toString()

console.log(year)
const getPdf = async (mon,day)=> {
    try {
        if(mon<10)
            mon = "0"+mon.toString()
        if(day<10)
            day = "0"+day.toString()
        if(!typeof mon == "string" || !typeof day == "string"){
            mon = mon.toString()
            day = day.toString()
        }
        return await fetch(`http://intelligence.htb/documents/20${year}-${mon}-${day}-upload.pdf`)
        .then((res)=>{
            if(res.status == 200){
                const {url,body} = res
                let fileName = url.split('/').pop()
                const dest = createWriteStream(path.join('pdf',fileName))
                body.pipe(dest)
            }
        })
    } catch (error){
        console.log("Tested URL Not Found")
    }
}

for( let months = 1; months <= 13; months++)
    for(let days = 1; days <=32; days++)
        getPdf(months,days)
        
