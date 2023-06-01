import React from 'react';
import styled from '@emotion/styled'
import { BlogInfo } from '../../../types/BlogInfo';


interface InputProps {
  dataList: BlogInfo[];
  className?: string;
}

const Table: React.FC<InputProps> = ({ dataList, className }) => {
  const TableWrapper = styled.table`
    width: 98%;
    margin: 10px auto;
    border: solid 1px #000;
    padding: 0;
    tr {
      background-color: #ccc;
      border: #000 1px solid;
      padding: 0;
    }
    td {
      background-color: #ffffff;
      border: #ccc 1px solid;
      padding: 2px;
    }
    .title {
      width: 50%;
    }
    .tag{
      width: 10%;
    }
    .publishDate{
      width: 10%;
    }
  `;

  return (
    <TableWrapper className={className}>
      <thead>
          <tr>
              <th className='title'>記事タイトル</th>
              <th className='tag'>タグ</th>
              <th className='publishDate'>公開日</th>
          </tr>
      </thead>
      <tbody>
        {dataList.map((row)=>{
          return (
            <tr>
                <td>{row?.title ? row.title : '(タイトルなし)'}</td>
                <td>{row?.tagName ? row.tagName : '(タグ未設定)'}</td>
                <td>{row?.publishDate ? row.publishDate : '(未公開)'}</td>
            </tr>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

export default Table;