import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Powered by</span>
      <a
        href='https://www.900337.xyz/'
        className='underline justify-start'>
        晴天 {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
