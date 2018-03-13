import React from 'react';
// URL 쿼리를 해석 라이브러리
import queryString from 'query-string';

const About = ({ location, match }) => {
  /* /about/foo?detail=true 경로로 들어가서 개발자 콘솔을 열고 확인해보면
    detail 값이 객체에 생겼다
  */
  // ? 부터 쿼리를 받아서 변수에 담음
  const query = queryString.parse(location.search);
  // 출력
  console.log(query);
  // 쿼리의 detail이 true 이면 true 아닐 때는 false
  const detail = query.detail === 'true';

  return (
    <div>
      <h2>About {match.params.name}</h2>
      {/* detail 객체의 들어있는 값이 true일 경우 hello가 보인다 */}
      {detail && 'hello'}
    </div>
  );
};

export default About;
