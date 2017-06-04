// @flow

import React from 'react';
import $ from 'jquery';

/* globals HTMLElement */

type Props = {
  children: React.Component<*>,
  topics: Array<Object>,
  speakers: Array<Object>,
  user: Object | null,
  agenda: {[key: string]: string},
  addTopic(topic: string): void,
  removeTopic(topic: string): void,
};

export default class ModalProvider extends React.Component {
  static childContextTypes = {
    openModal: React.PropTypes.func,
    closeModal: React.PropTypes.func,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      topic: null,
      session: null,
      type: 'topic',
    };
    this.saved = props.agenda ? Object.values(props.agenda) : [];
  }

  state: {
    topic: string | null,
    session: string | null,
    type: 'topic' | 'session',
  };


  getChildContext() {
    return {
      openModal: (type: 'topic' | 'session', id: string) => {
        this.setState({ type, [type === 'topic' ? 'topic' : 'session']: id });
        $(this.modal).modal('open');
      },
      closeModal: () => {
        $(this.modal).modal('close');
      },
    };
  }

  componentDidMount() {
    $(this.modal).modal();
  }

  componentWillReceiveProps(nextProps: Props) {
    this.saved = nextProps.agenda ? Object.values(nextProps.agenda) : [];
  }

  saved: Array<any>;
  props: Props;
  modal: HTMLElement;

  handleClick() {
    const topic = this.state.topic;
    if (!topic) return;
    const saved = this.saved.indexOf(topic) !== -1;
    if (saved) {
      this.props.removeTopic(topic);
    } else {
      this.props.addTopic(topic);
    }
  }

  renderSpeakers(topic: Object) {
    const speakers = topic.speaker.map(id => this.props.speakers[id]);
    return (
      <div className="row">
        {speakers.map((speaker) => {
          const hasSocial = 'social' in speaker;
          const icon = 'portrait' in speaker && speaker.portrait ? speaker.portrait : 'https://file.hkoscon.org/speakers/2017/unknown.png';
          return (
            <div className="col s12 m6 l4">
              <div>
                <img src={icon} className="responsive-img" alt={speaker.name} />
                {speaker.name}
              </div>
              <div>
                {hasSocial && 'github' in speaker.social && (
                  <a className="btn-floating blue-theme" href={`https://github.com/${speaker.social.github}`} target="_blank">
                    <i className="fa fa-github globe" />
                  </a>
                )}
                {hasSocial && 'project_github' in speaker.social && (
                  <a className="btn-floating blue-theme" href={speaker.social.project_github} target="_blank">
                    <i className="fa fa-github globe" />
                  </a>
                )}
                {hasSocial && 'twitter' in speaker.social && (
                  <a href={speaker.social.twitter} className="btn-floating blue-theme" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                )}
                {hasSocial && 'blog' in speaker.social && (
                  <a href={speaker.social.blog} className="btn-floating blue-theme" target="_blank">
                    <i className="fa fa-globe" />
                  </a>
                )}
                {hasSocial && 'facebook' in speaker.social && (
                  <a href={speaker.social.facebook} className="btn-floating blue-theme" target="_blank">
                    <i className="fa fa-facebook" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  renderSave() {
    return (
      <div className="fixed-action-btn">
        <button className="btn-floating btn-large" onClick={() => this.handleClick()}>
          <i className="material-icons">
            {this.saved.indexOf(this.state.topic) !== -1 ? 'delete' : 'save' }
          </i>
        </button>
      </div>
    );
  }

  render() {
    const topic = this.props.topics.find(t => t.id === this.state.topic) || {};
    const containHtmlTag = topic.description && topic.description[0].indexOf('</') !== -1;
    const description = (!containHtmlTag && topic.description && topic.description[0]) || '';
    return (
      <div>
        <div ref={(modal) => { this.modal = modal; }} className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4 data-role="title">{topic.title}</h4>
            <div>
              { containHtmlTag ?
                <div dangerouslySetInnerHTML={{ __html: topic.description[0] }} />
                :
                description
              }
            </div>
            <div>
              {'speaker' in topic && this.renderSpeakers(topic)}
            </div>
            {this.props.user !== null && this.renderSave()}
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">
              Close
            </a>
            <a href={`/2017/topics/${this.state.topic || '#'}`} className="modal-action waves-effect waves-green btn-flat">
              More
            </a>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
