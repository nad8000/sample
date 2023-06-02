import React, { useState } from 'react';
import styled from '@emotion/styled'
import Header from '../Organisms/header/Header'
import Footer from '../Organisms/footer/Footer'
import Table from '../Atoms/table/Table'
import { BlogInfo } from '../../types/BlogInfo';



/**
 * ヘッダーコンポーネント
 * @returns {React.Component}
 */
const ListPage: React.FC = ({}) => {
  const [dataList, setDataList] = useState([
    {
      title : 'よくわかる記事タイトル1',
      blogId : 1,
      tagName : '技術',
      tagId : 1,
      publishDate : '2023/6/1 22:44',
    },
    {
      title : 'よくわかる記事タイトル2',
      blogId : 1,
      tagName : '技術2',
      tagId : 2,
      publishDate : '2023/6/1 22:44',
    },
    {
      title : 'よくわかる記事タイトル3',
      blogId : 1,
      tagName : '技術3',
      tagId : 3,
      publishDate : '2023/6/1 22:44',
    },
  ]);

  const Body = styled.body`
    display: block;
    margin: 0;
    padding: 0;
  `;

  return (
    <Body>
      <Header></Header>
      <Table dataList={dataList} className='table'></Table>
      <Footer></Footer>
    </Body>
  );
};

export default ListPage;