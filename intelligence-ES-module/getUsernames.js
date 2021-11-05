import {readdir} from 'fs/promises';
import {exec} from "child_process";

const  enumerateDir = async (dir)=>{
	try{
		const files = await readdir(dir);
		for (const file of files){
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

enumerateDir('pdf')
