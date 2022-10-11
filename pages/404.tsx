import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Custom404 = () => {
  const { t } = useTranslation('errors');

  return (
    <div>
      <h1>{t('404.title')}</h1>
      <p>{t('404.help')}</p>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['errors'])),
  },
});

export default Custom404;
