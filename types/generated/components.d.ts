import type { Schema, Struct } from '@strapi/strapi';

export interface CampaignCampaign extends Struct.ComponentSchema {
  collectionName: 'components_campaign_campaigns';
  info: {
    description: '';
    displayName: 'Campaign';
  };
  attributes: {
    CampaignProduct: Schema.Attribute.Relation<
      'oneToOne',
      'api::campaign-product.campaign-product'
    >;
    CampaignType: Schema.Attribute.Relation<
      'oneToOne',
      'api::campaign-type.campaign-type'
    >;
    Count: Schema.Attribute.Integer;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ClientClient extends Struct.ComponentSchema {
  collectionName: 'components_client_clients';
  info: {
    description: '';
    displayName: 'client';
  };
  attributes: {
    api: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface FieldField extends Struct.ComponentSchema {
  collectionName: 'components_field_fields';
  info: {
    description: '';
    displayName: 'field';
  };
  attributes: {
    Count: Schema.Attribute.Integer;
    Detail: Schema.Attribute.RichText;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    WorkType: Schema.Attribute.Relation<'oneToOne', 'api::work-type.work-type'>;
  };
}

export interface ImpressionSocialField extends Struct.ComponentSchema {
  collectionName: 'components_impression_social_fields';
  info: {
    description: '';
    displayName: 'Social Field';
  };
  attributes: {
    Comment: Schema.Attribute.Integer;
    Count: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    Detail: Schema.Attribute.RichText;
    Follower: Schema.Attribute.Integer;
    Like: Schema.Attribute.Integer;
    Reach: Schema.Attribute.Integer;
    Share: Schema.Attribute.Integer;
    SocialType: Schema.Attribute.Relation<
      'oneToOne',
      'api::social-type.social-type'
    >;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MonthMonth extends Struct.ComponentSchema {
  collectionName: 'components_month_months';
  info: {
    description: '';
    displayName: 'month';
  };
  attributes: {
    Campaign: Schema.Attribute.Component<'campaign.campaign', true>;
    Creative: Schema.Attribute.Component<'field.field', true> &
      Schema.Attribute.Required;
    Month: Schema.Attribute.Enumeration<
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
    > &
      Schema.Attribute.Required;
    Social: Schema.Attribute.Component<'impression.social-field', true>;
    TopCity: Schema.Attribute.Component<'performance.performance', true>;
  };
}

export interface PerformancePerformance extends Struct.ComponentSchema {
  collectionName: 'components_performance_performances';
  info: {
    displayName: 'Performance';
  };
  attributes: {
    City: Schema.Attribute.Relation<'oneToOne', 'api::city.city'>;
    UserCount: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'campaign.campaign': CampaignCampaign;
      'client.client': ClientClient;
      'field.field': FieldField;
      'impression.social-field': ImpressionSocialField;
      'month.month': MonthMonth;
      'performance.performance': PerformancePerformance;
    }
  }
}
