import { Link } from 'react-router-dom'
import { PAGES } from '../data/pages'
import './preview.css'

export default function PreviewPage() {
  return (
    <div className="preview-page">
      <header className="preview-header">
        <div>
          <p className="preview-eyebrow">Effective HTML · Korean</p>
          <h1>전체 페이지 미리보기</h1>
          <p>9개 문서 페이지를 한 화면에서 비교합니다. 카드를 클릭하면 해당 페이지로 이동합니다.</p>
        </div>
        <Link to="/docs" className="preview-enter">
          가이드 열기
        </Link>
      </header>
      <div className="preview-grid">
        {PAGES.map((page) => (
          <article key={page.path} className="preview-card">
            <div className="preview-card-meta">
              <h2>
                <Link to={page.path}>{page.navTitle}</Link>
              </h2>
              <p>{page.description}</p>
              <code>{page.path}</code>
            </div>
            <iframe title={page.title} src={page.path} loading="lazy" />
          </article>
        ))}
      </div>
    </div>
  )
}
