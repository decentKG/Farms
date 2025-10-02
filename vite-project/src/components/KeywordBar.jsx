import React from 'react';
import '../styles/KeywordBar.css';
import '../index.css';

const keywords = [
  'Agriculture',
  'Farming',
  'Organic',
  'Vegetables',
];

const Separator = () => <span className="keyword-separator">*</span>; 

const renderKeywordList = (list) => (
  list.map((keyword, index) => (
    <React.Fragment key={keyword + index}>
      <span className="keyword-item">{keyword}</span>
      {index < list.length - 1 && <Separator />}
    </React.Fragment>
  ))
);

function KeywordBar() {
  return (
    <div className="keyword-bar-outer">
      <div className="keyword-bar-inner">
        <div className="keyword-group">
          {renderKeywordList(keywords)}
        </div>
        <div className="keyword-group" aria-hidden="true">
          {renderKeywordList(keywords)}
        </div>
      </div>
    </div>
  );
}

export default KeywordBar;