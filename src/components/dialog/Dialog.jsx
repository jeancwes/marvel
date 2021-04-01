import React from 'react';
import './Dialog.css'

export default function Dialog({
  opened,
  onClose,
  header,
  content,
  footer
}) {

  return (
    <>
      {(opened) && (
        <div className="dialog-backdrop">
          <section className="dialog">
            <header className="dialog-header">
              {header}
              <button type="button" className="link float-right" 
                onClick={() => onClose(!opened)}>
                  Fechar Diálogo
              </button>
            </header>
            <section className="dialog-content">
              {content}
            </section>
            <footer className="dialog-footer">
              {footer}
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
