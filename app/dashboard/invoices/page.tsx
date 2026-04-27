import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices',
};
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense fallback={<SearchFallback placeholder="Search invoices..." />}>
          <Search placeholder="Search invoices..." />
        </Suspense>
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Suspense fallback={<PaginationFallback />}>
          <Pagination totalPages={totalPages} />
        </Suspense>
      </div>
    </div>
  );
}

function SearchFallback({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search-fallback" className="sr-only">
        Search
      </label>
      <input
        id="search-fallback"
        className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        disabled
      />
    </div>
  );
}

function PaginationFallback() {
  return <div className="h-10" aria-hidden="true" />;
}
