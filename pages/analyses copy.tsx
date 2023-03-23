import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import Searchbar from '@/components/SearchBar/SearchBar';

export function AnalysisRectangle(props: {fileName:string}) {
  const filePath:string = "./pdfViewer?fileName=" + props.fileName;

  return (
    <div className="grid grid-cols-10 grid-rows-1 h-[50px] m-3 rounded bg-blue-200">
      <h1 className="self-center col-span-5 ml-5">{props.fileName}</h1>

      <div className="object-contain h-full col-start-9">
        <a className="h-full" href={filePath}>
          <VisibilityIcon color='primary' />
        </a>
      </div>

      <div className="object-contain h-full col-start-10">
        <a className="h-full" href={props.fileName} download>
          <DownloadIcon color='primary' />
        </a>
      </div>
    </div>
  );
}

export default function AnalysesPage() {
  const analysesPdfs: string[] = [
    "analysis.pdf",
    "demo.pdf",
    "https://profs.info.uaic.ro/~adiftene/Scoala/2021/IP/SemII_IP_FisaDisciplinei_Ro2020-2021_online.pdf",
    "iao.pdf",
    "demo.pdf",
    "demo.pdf",
    "demo.pdf",
    "demo.pdf",
    "demo.pdf",
    "demo.pdf",
    "demo.pdf",
    "demo.pdf",
    "demo.pdf",
  ];
  
  return (
    <div className="flex flex-col h-[74.7vh]">
      <Searchbar />
      <div className='bg-blue-400 overflow-auto'>
      {/* creating an analysis rectangle for each pdf in the array declared ^^^ */}
      {/* *** shoutout to advanced programming *** */}
      {analysesPdfs.map((analysesPdf, index) => (
        <AnalysisRectangle fileName={analysesPdf} key={ index } />
      ))}
      </div>
    </div>
  )
}