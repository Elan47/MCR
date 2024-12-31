import type { Schema, Struct } from '@strapi/strapi';

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
    count: Schema.Attribute.Integer;
    details: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    version: Schema.Attribute.Relation<'oneToOne', 'api::version.version'>;
    work_type: Schema.Attribute.Relation<
      'oneToOne',
      'api::work-type.work-type'
    >;
  };
}

export interface MonthMonth extends Struct.ComponentSchema {
  collectionName: 'components_month_months';
  info: {
    description: '';
    displayName: 'month';
  };
  attributes: {
    Expected: Schema.Attribute.Integer;
    Field: Schema.Attribute.Component<'field.field', true> &
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
    Revised: Schema.Attribute.Integer;
    Submitted: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'client.client': ClientClient;
      'field.field': FieldField;
      'month.month': MonthMonth;
    }
  }
}
