// HR-UPDATER: v1.0
import React from 'react';

const Autorenbox: React.FC = () => {
  return (
    <div className="autorenbox">
      <div className="autorenbox-header">
        <div className="autorenbox-avatar">TS</div>
        <div className="autorenbox-info">
          <h3>Thomas Sander</h3>
          <p className="autorenbox-title">Gruender & Geschaeftsfuehrer</p>
        </div>
      </div>
      <p className="autorenbox-bio">
        Thomas Sander ist der Gruender von orthopaedie-stellenangebote.de. Mit jahrelanger Erfahrung im
        Bereich Orthopaedie und Personalwesen hat er dieses spezialisierte Jobportal
        ins Leben gerufen, um Arbeitgeber und qualifizierte Fachkraefte zusammenzubringen.
      </p>
      <div className="autorenbox-links">
        <a href="https://orthopaedie-stellenangebote.de/autor/thomas-sander">Mehr ueber den Autor</a>
      </div>
    </div>
  );
};

export default Autorenbox;
