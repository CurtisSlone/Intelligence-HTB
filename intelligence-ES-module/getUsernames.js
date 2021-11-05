import {readdir} from 'fs/promises';
import {exec, spawn} from "child_process";
import path from 'path';

const args= process.argv
const keyWord = args[2]

const enumerateDir = async (dir, keyword)=>{
	try{
		const files = await readdir(dir);
		for (const file of files){
				const pyProg = spawn('python3',["./intelligence-py-module/parsePDF.py", path.join(dir,file), keyword])
				pyProg.stdout.on('data',(data)=>console.log(data.toString()))
				exec(`exiftool pdf/${file} | grep Creator | cut -d ":" -f 2 >> users.txt`,(err,stdout,stderr)=>{
				if(err)
					console.log(err)
				if(stdout)
					console.log(stdout)
				if(stderr)
					console.log(stderr)
			})
		}
	} catch(err){
		console.log(err)
	}
}

enumerateDir('pdf',keyWord)