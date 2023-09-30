
import { useState, useEffect } from 'react';
import Table from 'react-tailwind-table';
import 'react-tailwind-table/dist/index.css'; 
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import * as xlsx from 'xlsx';

export default function ViewTable({tableData, tableTitle}) {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

    const handleOnExportExcel = () => {
    const specificColumns = rows.map(item => ({
        Name: item.Name,
        Email: item.email,
        PhoneNumber: item.phoneNo,
        collegeName: item.collegeName,
        RegistrationId : item.collegeRegistrationNumber,
        isPaid: item.isPaid
      }));
    var wb = xlsx.utils.book_new(),
    ws = xlsx.utils.json_to_sheet(specificColumns);
    xlsx.utils.book_append_sheet(wb,ws,"ProfileData");
    xlsx.writeFile(wb,"Registered_List.xlsx")
  }

  useEffect(() => {
    const colum = [
        {field: "Name",use: "Name"},
        {field: "email",use: "Email"},
        {field: "phoneNo",use: "Phone Number"},
        {field: "collegeName",use: "CollegeName"},
        {field: "isPaid",use: "Payment"},
    ]
    setColumns(colum);
  }, []);

  useEffect(() => {
    if(tableData.length !==0){
      setRows(tableData);
    }
  }, [tableData]);

  const customTableStyle = {
    base_bg_color: 'bg-black',
    base_text_color: 'text-white',
    top: {
      elements: {
        search: 'bg-black',
      },
    },
    table_row: 'bg-aneesh',
    export: 'text-primary',
  };
  
  
  const rowcheck = (row, column, display_value) => {
    if (column.field === 'Name') {
        return <b className="text-primary">{display_value}</b>;
    }
    if (column.field === 'email') {
        return <b className="text-primary">{display_value}</b>;
    }
    if (column.field === 'phoneNo') {
        return <b className="text-primary">{display_value}</b>;
    }
    if (column.field === 'email') {
        return <b className="text-primary">{display_value}</b>;
    }
    if (column.field === 'collegeName') {
        return <b className="text-primary">{display_value}</b>;
    }
    if (column.field === 'isPaid') {
      return(
        ((display_value)?
        <b className="text-primary h-8 w-18 py-2 px-6 rounded-2xl bg-green">paid</b>
        :
        <b className="text-primary h-8 w-18 py-2 px-6 rounded-2xl bg-aneesh">Unpaid</b>)
      );
    }
    return display_value;
  };

  return (
    <div>
      <div className='flex justify-between mb-2'>
      <BottomGlitter p={tableTitle}/>
      <div className='flex items-center justify-center bg-primary-light text-primary font-bold px-8'>total count :  {String(rows.length)}</div>
      <button onClick={handleOnExportExcel} className='h-12 w-32 bg-aneesh flex items-center justify-center '>EXPORT</button>
      </div>
      <Table
        columns={columns}
        rows={rows}
        per_page={200}
        table_header="Technothink"
        row_render={rowcheck}
        styling={customTableStyle}
      />
    </div>
  );
}
