import React from 'react';
import CooperativeItem from './CooperativeItem';
import { FeatureContainer, FeatureLink } from './cooperativeStyle';
import pencil from '../../assets/pencil.svg';
import transaction from '../../assets/transaction.svg';
import notification from '../../assets/notification.svg';
import categorize from '../../assets/categorize.svg';

const iconList = [{
  id: 1,
  icon: pencil,
  title: 'Create',
  alt: 'Ever pencil',
  content: 'Creating a new cooperative made easy.',
  url: '/dashboard/cooperative/register'
}, {
  id: 2,
  icon: transaction,
  title: 'Transaction',
  alt: 'Transaction records',
  content: 'See all transactions within various cooperative',
  url: '/dashboard/cooperative/transaction',
}, {
  id: 3,
  icon: notification,
  title: 'Notification',
  alt: 'Stay notified',
  content: 'Never miss out on any activity in your cooperative',
  url: '/dashboard/cooperative/notification'
}, {
  id: 4,
  icon: categorize,
  title: 'Active Cooperative',
  alt: 'Every category',
  content: 'Connect with cooperative with the best engagement',
  url: '/dashboard/cooperative/category'
}
]

const Cooperative = () => {
  return (
    <FeatureContainer>
      {iconList.map(listed => <CooperativeItem key={listed.id} url={listed.url} id={listed.id} title={listed.title} icon={listed.icon} content={listed.content} />)}

    </FeatureContainer>
  )
}

export default Cooperative;

