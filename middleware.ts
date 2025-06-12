import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /about, /features)
  const path = request.nextUrl.pathname

  // Handle /partners and all /resources routes (including base /resources)
  if (path === '/partners' || path === '/resources' || path.startsWith('/resources/')) {
    // Redirect to the features page
    return NextResponse.redirect(new URL('/features', request.url))
  }

  // Return the response unchanged for all other routes
  return NextResponse.next()
}

// Configure the middleware to match /partners and all /resources paths
export const config = {
  matcher: ['/partners', '/resources', '/resources/:path*']
}
