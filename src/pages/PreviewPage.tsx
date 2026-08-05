import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Provider as BalancerProvider } from 'react-wrap-balancer'
import { BalancedText } from '../components/BalancedText'
import { PAGES } from '../data/pages'
import './preview.css'

const TITLE = '전체 페이지 미리보기 · Effective HTML'
const DESCRIPTION = '9개 문서 페이지를 한 화면에서 비교합니다.'

export default function PreviewPage() {
  useEffect(() => {
    document.title = TITLE
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', DESCRIPTION)
  }, [])

  return (
    <BalancerProvider>
      <div className="preview-page">
        <header className="preview-header">
          <div>
            <p className="preview-eyebrow">Effective HTML · Korean</p>
            <h1>
              <BalancedText breakSentences={false}>전체 페이지 미리보기</BalancedText>
            </h1>
            <p>
              <BalancedText>
                9개 문서 페이지를 한 화면에서 비교합니다. 카드를 클릭하면 해당 페이지로 이동합니다.
              </BalancedText>
            </p>
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
                <p>
                  <BalancedText breakSentences={false}>{page.description}</BalancedText>
                </p>
                <code>{page.path}</code>
              </div>
              {/* HashRouter이므로 iframe도 해시 URL로 진입해야 합니다. */}
              <iframe
                title={page.title}
                src={`${import.meta.env.BASE_URL}#${page.path}`}
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </BalancerProvider>
  )
}
