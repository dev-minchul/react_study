import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import route from '../../../modules/route';

const Job = () => {
  // 쿼리스트링 값을 가져오는 훅 함수 useSerchParams();
  // const [SerchParams] = useSearchParams();
  // const title = SerchParams.get("title");

  // 하위 뎁스의 폴더 useParams()
  const {title} = useParams();

  const jobs = useSelector(({route}) => route.jobs)[title];
  console.log(jobs)
  // redux 초기값에 적용시켜서 사용자의 맞는 데이터를 화면에 뿌리기
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>[title]기술</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>{jobs && jobs.name}</td>
          </tr>
          {jobs && jobs.skills.map((skill, i) => (
            <tr key={i}>
            <td>{skill}</td>
            </tr>
          )
        )}
       </tbody>
    </table>
  </div>
  );
};

export default Job;