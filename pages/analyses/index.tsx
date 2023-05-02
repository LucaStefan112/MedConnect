import SearchBar from '@/components/SearchBar/SearchBar'
import VerticalList from '@/components/VerticalList/VerticalList'
import { IGetAnalysesResponse } from '@/services/response.interfaces';
import UserService, { IAnalysis } from '@/services/user.service';
import DateTimeParser from '@/utils/DateTimeParser';
import Routes from '@/utils/Routes';
import { Button } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';

export default function Analyses() {
  const router = useRouter();
  
  const [analyses, setAnalyses] = useState<IAnalysis[]>([
    { id: '0', description: 'Analyses_set_0', type: '0', title: 'Analisis_0', date: new Date('2021-10-10') },
    { id: '1', description: 'Analyses_set_1', type: '1', title: 'Analisis_1', date: new Date('2021-10-11') },
    { id: '2', description: 'Analyses_set_2', type: '2', title: 'Analisis_2', date: new Date('2021-10-12') },
    { id: '3', description: 'Analyses_set_3', type: '3', title: 'Analisis_3', date: new Date('2021-10-13') },
    { id: '4', description: 'Analyses_set_4', type: '4', title: 'Analisis_4', date: new Date('2021-10-14') },
    { id: '5', description: 'Analyses_set_5', type: '5', title: 'Analisis_5', date: new Date('2021-10-15') },
    { id: '6', description: 'Analyses_set_6', type: '6', title: 'Analisis_6', date: new Date('2021-10-16') },
    { id: '7', description: 'Analyses_set_7', type: '7', title: 'Analisis_7', date: new Date('2021-10-17') },
    { id: '8', description: 'Analyses_set_8', type: '8', title: 'Analisis_8', date: new Date('2021-10-18') },
  ]);

  // useEffect(() => {
  //   UserService.getAnalyses().then((res: IGetAnalysesResponse) => {
  //     if(res.success && res.analyses){
  //       setAnalyses(res.analyses);
  //     } else {
  //       console.log(res.message);
  //     }
  //   });
  // }, []);

  return (
    <div className='main_page'>
      <div className='flex flex-row items-center justify-between w-full h-14'>
        <SearchBar placeholder='Search analysis...' />
      </div>
      <p className='text-4xl mt-7 mb-7 text-blue-600 w-full'>
        My Analyses
      </p>
      <VerticalList className='max-h-[30.5em] hide_scroll'
        list= {
          analyses.map((analysis: IAnalysis) => {
            return {
              title:  analysis.title + ' at ' + DateTimeParser.parseDate(analysis.date),
              onClick: () => router.push(Routes.ANALYSIS(analysis.id)),
              icons: [
                <a href='641946eda55feb76cc7b08c5_23-03-2023_biochemistry+haematology+microbiology.pdf' key={ 0 } download={true}>
                  <DownloadIcon color='primary' />
                </a>
              ]
            }
          })
        }
      />
    </div>
  )
}
