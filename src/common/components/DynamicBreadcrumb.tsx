import { useMemo } from 'react';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiChevronRight } from 'react-icons/bi';

type LinkItem = { text: string; href: string };

const HOME_ITEM: LinkItem = {
  text: 'Home',
  href: '/',
};

const capitalize = (text: string) => text[0].toUpperCase() + text.slice(1);
const last = <T,>(array: T[]) => array[array.length - 1];

const DynamicBreadcrumb = () => {
  const router = useRouter();

  const linkItems = useMemo(() => {
    if (router.asPath === '/') return [HOME_ITEM];

    const results: LinkItem[] = [];

    router.asPath.split('/').forEach((path, index) => {
      switch (index) {
        case 0:
          results.push(HOME_ITEM);
          break;

        case 1:
          results.push({
            text: path,
            href: results[index - 1].href + path,
          });
          break;

        default:
          results.push({
            text: path,
            href: `${results[index - 1].href}/${path}`,
          });
          break;
      }
    });

    return results;
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Pokedex | {capitalize(last(linkItems).text)}</title>
      </Head>
      <Breadcrumb
        p={2}
        spacing={2}
        separator={<BiChevronRight color="gray.500" />}
      >
        {linkItems.map((item, index) => {
          const isCurrentPage = linkItems.length - 1 === index;

          return (
            <BreadcrumbItem key={item.href}>
              <Link href={item.href} passHref>
                <BreadcrumbLink
                  isCurrentPage={isCurrentPage}
                  fontWeight={isCurrentPage ? 'medium' : 'normal'}
                  textTransform="capitalize"
                >
                  {item.text}
                </BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </>
  );
};

export default DynamicBreadcrumb;
