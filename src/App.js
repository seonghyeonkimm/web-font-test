import './App.css';

import { ReactComponent as Arrow } from './arrow-right.svg';

function App() {
  return (
    <div>
      <div className="m">
        <p>KCD font</p>
        <div className="numeric kcd">
          1,234,567,890
        </div>
      </div>
      <div className="m">
        <p>Noto</p>
        <div className="numeric noto">
          1,234,567,890
        </div>
      </div>
      <div className="m">
        <p>Spoqa</p>
        <div className="numeric spoqa">
          1,234,567,890
        </div>
      </div>
      <div className="m">
        <p>KCD font</p>
        <button className="button kcd">
          <span className="label">
            버튼 레이블
          </span>
          <span className="icon">
            <Arrow />
          </span>
        </button>
      </div>
      <div className="m">
        <p>noto sans</p>
        <button className="button noto">
          <span className="label">
            버튼 레이블
          </span>
          <span className="icon">
            <Arrow />
          </span>
        </button>
      </div>
      <div className="m">
        <p>Spoqa Han Sans</p>
        <button className="button spoqa">
          <span className="label">
            버튼 레이블
          </span>
          <span className="icon">
            <Arrow />
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
