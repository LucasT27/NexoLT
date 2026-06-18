'use client';

import { Activity, CheckCircle2, GitBranch, PackageCheck, Wrench } from 'lucide-react';
import { useState } from 'react';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
import { modelCases } from './data';
import { ModelCaseDemo } from './model-case-demo';

type ModelCase = (typeof modelCases)[number];

const tabs = [
  { title: 'Problema', icon: Activity },
  { title: 'Solucion', icon: Wrench },
  { title: 'Flujo', icon: GitBranch },
  { title: 'Demo', icon: PackageCheck },
  { title: 'Resultado', icon: CheckCircle2 }
];

export function ModelCaseTabs({ item }: { item: ModelCase }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="model-tabs">
      <ExpandableTabs
        activeColor="text-[#007d5b]"
        className="model-tabs-control"
        onChange={(index) => setActiveTab(index ?? 0)}
        selectedIndex={activeTab}
        tabs={tabs}
      />

      <div className="model-tabs-panel">
        {activeTab === 0 ? (
          <div className="case-block">
            <strong>Problema</strong>
            <p>{item.problem}</p>
          </div>
        ) : null}

        {activeTab === 1 ? (
          <div className="case-block">
            <strong>Solucion</strong>
            <p>{item.solution}</p>
          </div>
        ) : null}

        {activeTab === 2 ? (
          <div className="case-flow" aria-label={`Flujo para ${item.title}`}>
            {item.flow.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
        ) : null}

        {activeTab === 3 ? <ModelCaseDemo type={item.demo} /> : null}

        {activeTab === 4 ? (
          <>
            <div className="case-block">
              <strong>Resultado esperado</strong>
              <p>{item.outcome}</p>
            </div>
            <div className="pill-list compact">
              {item.components.map((component) => (
                <span key={component}>{component}</span>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
