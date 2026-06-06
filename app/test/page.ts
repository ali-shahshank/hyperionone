// app/test/page.tsx
'use client'

import { useEffect } from 'react'
import { supabase } from '@/utils/supabase/client'

export default function TestPage() {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase
        .from('your_table_name')
        .select('*')
        .limit(1)

      console.log('DATA:', data)
      console.log('ERROR:', error)
    }

    testConnection()
  }, [])

  return (<>Testing Supabase...</>)
}