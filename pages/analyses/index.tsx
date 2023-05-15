import VerticalList from '@/components/VerticalList/VerticalList'
import { IGetAnalysesResponse } from '@/services/response.interfaces';
import UserService, { IAnalysis } from '@/services/user.service';
import DateTimeParser from '@/utils/DateTimeParser';
import Routes from '@/utils/Routes';
import { Button } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { MuiFileInput } from 'mui-file-input';

export default function Analyses() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  
  const [analyses, setAnalyses] = useState<IAnalysis[]>([]);

  useEffect(() => {
    UserService.getAnalyses().then((res: IGetAnalysesResponse) => {
      if(res.success && res.analyses){
        setAnalyses(res.analyses);
      } else {
        console.log(res.message);
      }
    });
  }, []);

  const handleSubmit = (newFile: React.SetStateAction<File | null>) => {
    const formData = new FormData();
    formData.append('file', newFile as File);
    UserService.addAnalysis(formData).then((res) => {
      if(res.success){
        setFile(null);
        UserService.getAnalyses().then((res: IGetAnalysesResponse) => {
          if(res.success && res.analyses){
            setAnalyses(res.analyses);
          } else {
            console.log(res.message);
          }
        });
      } else {
        console.log(res.message);
      }
    });
  }

  return (
    <div className='main_page'>
      <div className='flex w-full'>
        <p className='text-4xl mb-7 text-blue-600 w-full'>
          My Analyses
        </p>
        <MuiFileInput 
          value={file}
          onChange={(e) => setFile(e)} 
          placeholder='Add analysis' 
        />
        { file &&  <Button className='main_button text-lg h-14 ml-6 px-5' onClick={() => handleSubmit(file)}>
            Upload
          </Button>
        }
      </div>
      { analyses.length ? <VerticalList className='max-h-[30.5em] hide_scroll'
        list= {
          analyses.map((analysis: IAnalysis) => {
            return {
              title:  analysis.name + ' at ' + DateTimeParser.parseDate(new Date(Date.parse(analysis.date))),
              onClick: () => router.push(Routes.ANALYSIS(analysis.person?._id, analysis.name)),
              icons: [
                  <DeleteIcon 
                    key={analysis._id + 'download'}
                    color='primary'
                    className='mx-4 cursor-pointer' 
                    onClick={() => UserService.deleteAnalysis(analysis._id).then((res) => {
                      if(res.success){
                        UserService.getAnalyses().then((res: IGetAnalysesResponse) => {
                          if(res.success && res.analyses){
                            setAnalyses(res.analyses);
                          } else {
                            console.log(res.message);
                          }
                        });
                      } else {
                        console.log(res.message);
                      }
                    })}
                  />,
              ]
            }
          })
        }
      /> : <p className='text-2xl text-center mt-10 text-gray-400'>No analyses</p>}
    </div>
  )
}
