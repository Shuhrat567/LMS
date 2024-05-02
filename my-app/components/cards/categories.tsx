import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'

interface Props extends IBlog {
    isVertical?: boolean
}

function BlogCard(blog: Props) {
    return (
        <div>
            <Link href={`/tags/${blog.tag.slug}`}>
                <Badge variant={'secondary'} role='button'>
                    <Tag className={'w-4 h-4 me-2'}/>
                    {blog.tag.name}
                </Badge>
            </Link>
        </div>
    )
}

export default BlogCard
