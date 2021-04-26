import React from 'react';
import ThriftItem from './ThriftItem';
import { FeatureContainer, FeatureLink } from '../Cooperative/cooperativeStyle';
import apply from '../../assets/apply.svg';
import contact from '../../assets/active.svg';
import help from '../../assets/help.svg';
import transaction from '../../assets/transaction.svg';

const thriftList = [{
  id: 1,
  icon: apply,
  title: 'Apply',
  alt: 'Thrift application',
  content: 'Getting a thrift got easy simple with us',
  url: '/dashboard/thrift/apply'
}, {
  id: 2,
  icon: contact,
  title: 'Contact Us',
  alt: 'contact us',
  content: 'We would love to hear from you.',
  url: '/dashboard/thrift/contact'
}, {
  id: 3,
  icon: help,
  title: 'FAQ',
  alt: 'freqently asked questions',
  content: 'Are you stuck? Reach out to stay free. We have curated answers to issues.',
  url: '/dashboard/thrift/help'
},
{
  id: 4,
  icon: transaction,
  title: 'Transaction',
  alt: 'Thrift transaction',
  content: 'We process all transactions under 24 Hours',
  url: '/dashboard/cooperative/transaction'
}
]

const Thrift = () => {
  return (
    <FeatureContainer>
      {thriftList.map(thrift => <ThriftItem key={thrift.id} url={thrift.url} title={thrift.title} icon={thrift.icon} content={thrift.content} />)}

    </FeatureContainer>
  )
}

export default Thrift;

